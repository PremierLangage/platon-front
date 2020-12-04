import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {
    Resource,
    ResourceFilters,
    ResourceService,
    ResourceTypes,
} from '@platon/feature/workspace';
import { SearchBar, SearchBarFuseFilterer } from '@platon/shared/ui';
import { Subscription } from 'rxjs';
import {
    lightSpeedInOnEnterAnimation,
    lightSpeedOutOnLeaveAnimation,
} from 'angular-animations';

@Component({
    selector: 'app-workspace-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
    animations: [
        lightSpeedInOnEnterAnimation({ duration: 300 }),
        lightSpeedOutOnLeaveAnimation({ duration: 300 }),
    ],
})
export class SearchComponent implements OnInit, OnDestroy {
    private readonly subscriptions: Subscription[] = [];
    private readonly filterer = new SearchBarFuseFilterer<string>({
        dataSource: () => {
            let suggestions: string[] = [];
            this.createFilters().types.forEach((type: ResourceTypes) => {
                suggestions = suggestions.concat(this.suggestions[type]);
            });
            return suggestions;
        },
        fuseOptions: {
            includeMatches: true,
            findAllMatches: false,
            threshold: 0.2,
        },
        defaultCompletionGroup: 'SUGGESTIONS',
    });

    private pagination?: Subscription;
    private suggestions: Record<ResourceTypes, string[]> = {
        CIRCLE: [],
        ACTIVITY: [],
        EXERCISE: [],
    };

    readonly form = new FormGroup({
        circles: new FormControl(false),
        exercises: new FormControl(false),
        activities: new FormControl(false),
        sortBy: new FormControl('date'),
        status: new FormControl('ALL'),
        circleId: new FormControl(''),
        date: new FormControl(0),
    });
    readonly searchBar: SearchBar<string> = {
        placeholder: 'Essayez une matière, une notion...',
        filterer: this.filterer,
        onTrigger: this.paginate.bind(this),
        onReady: this.addRouterParamChangeListener.bind(this),
    };

    searching = false;
    dataSource: Resource[] = [];

    get shouldShowStatusForm() {
        return (
            this.form.controls['exercises'].value ||
            this.form.controls['activities'].value
        );
    }

    constructor(
        private readonly router: Router,
        private readonly activatedRoute: ActivatedRoute,
        private readonly resourceService: ResourceService
    ) {}

    ngOnInit() {
        this.createSuggestions();
    }

    ngOnDestroy() {
        this.pagination?.unsubscribe();
        this.subscriptions.forEach((s) => s.unsubscribe());
    }

    trigger(query?: string) {
        const filters = this.createFilters();
        const queryParams: Params = {
            term: (query ?? filters.query) || null,
            circle: filters.circleId || null,
            types: filters.types.join('|'),
            status: filters.status,
            sortBy: filters.sortBy,
            date: filters.date,
        };
        this.router.navigate([], {
            queryParams,
            relativeTo: this.activatedRoute,
            queryParamsHandling: 'merge',
        });
    }

    private paginate() {
        this.searching = true;
        this.pagination?.unsubscribe();
        this.pagination = this.resourceService
            .paginate({
                page: 0,
                pageSize: 100,
                filters: this.createFilters(),
            })
            .subscribe({
                next: (response) => {
                    this.dataSource = response.page;
                    this.pagination?.unsubscribe();
                    this.pagination = undefined;
                    this.searching = false;
                },
                error: (err) => {
                    console.error(err);
                    this.pagination?.unsubscribe();
                    this.pagination = undefined;
                    this.searching = false;
                },
            });
    }

    private createFilters() {
        const value = this.form.value;
        const types: ResourceTypes[] = [];
        if (value.circles) {
            types.push('CIRCLE');
        }

        if (value.exercises) {
            types.push('EXERCISE');
        }

        if (value.activities) {
            types.push('ACTIVITY');
        }

        return {
            types,
            query: this.searchBar.value,
            sortBy: value.sortBy,
            status: value.status,
            date: value.date,
            circleId: value.circleId,
        } as ResourceFilters;
    }

    private createSuggestions() {
        this.subscriptions.push(
            this.resourceService.suggestions().subscribe((suggestions) => {
                this.suggestions = suggestions;
            })
        );
    }

    private addRouterParamChangeListener() {
        if (!this.activatedRoute.snapshot.queryParamMap.keys.length) {
            this.form.patchValue({
                circles: true
            });
            this.trigger();
        }
        this.subscriptions.push(
            this.activatedRoute.queryParams.subscribe((e) => {
                if (e.types) {
                    this.form.patchValue({
                        circles: e.types.includes('CIRCLE'),
                        exercises: e.types.includes('EXERCISE'),
                        activities: e.types.includes('ACTIVITY'),
                    });
                }

                if (e.status) {
                    this.form.patchValue({
                        status: e.status,
                    });
                }

                if (e.circle) {
                    this.form.patchValue({
                        circleId: e.circle,
                    });
                }

                this.searchBar.value = e.term ?? this.searchBar.value;
            })
        );
    }
}
