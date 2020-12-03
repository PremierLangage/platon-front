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
import { Subject, Subscription } from 'rxjs';
@Component({
    selector: 'app-workspace-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
    animations: []
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
        filterer: {
            filter: (query) => {
                this.query = query;
                return this.filterer.filter(query);
            },
        },
        trigger: new Subject<string>(),
        onTrigger: (query) => {
            this.query = query || '';
            this.paginate();
        },
        onEmpty: () => (this.query = ''),
        onReady: this.addRouterParamChangeListener.bind(this),
    };

    query = '';
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
        this.paginate();
        this.createSuggestions();
    }

    ngOnDestroy() {
        this.pagination?.unsubscribe();
        this.subscriptions.forEach((s) => s.unsubscribe());
    }

    trigger(query?: string) {
        const filters = this.createFilters();

        const params: Params = {
            term: (query ?? filters.query) || null,
            circle: filters.circleId || null,
            types: filters.types.join('|'),
            status: filters.status,
            sortBy: filters.sortBy,
            date: filters.date,
        };

        this.router.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: params,
            queryParamsHandling: 'merge',
        });
    }

    private paginate() {
        this.searching = true;
        this.pagination?.unsubscribe();
        this.pagination = this.resourceService
            .paginate({
                page: 0,
                pageSize: 50,
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
            query: this.query,
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
        this.subscriptions.push(
            this.activatedRoute.queryParams.subscribe((e) => {
                const term = e.term || '';
                if (e.types) {
                    this.form.patchValue({
                        circles: false,
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

                this.searchBar.trigger?.next(term);
            })
        );
    }
}
