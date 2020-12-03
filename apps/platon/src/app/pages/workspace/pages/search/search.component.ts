import {
    Component,
    Input,
    OnDestroy,
    OnInit,
    TemplateRef,
} from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { ActivatedRoute, Router } from '@angular/router';
import {
    Circle,
    Resource,
    ResourceFilters,
    ResourceService,
    ResourceTypes,
} from '@platon/feature/workspace';
import { SearchBar, SearchBarFiltererResult, SearchBarFuseFilterer } from '@platon/shared/ui';
import { Subject, Subscription } from 'rxjs';
import { distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
    selector: 'app-workspace-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit, OnDestroy {
    private readonly subscriptions: Subscription[] = [];
    private suggestions: Record<ResourceTypes, string[]> = {
        CIRCLE: [],
        ACTIVITY: [],
        EXERCISE: []
    };

    searchBar!: SearchBar<string>;
    query = '';
    dataSource: Resource[] = [];

    form = new FormGroup({
        types: new FormArray([
            new FormControl('CIRCLE'),
        ]),
        sortBy: new FormControl('date'),
        status: new FormControl('ALL'),
        date: new FormControl(0),
    });

    constructor(
        private readonly router: Router,
        private readonly activatedRoute: ActivatedRoute,
        private readonly resourceService: ResourceService
    ) {
    }

    ngOnInit() {
        this.paginate();
        this.createSearchBar();
        this.createSuggestions();
        this.addFilterFormChangeListener();
        this.addRouterParamChangeListener();
    }

    ngOnDestroy() {
        this.subscriptions.forEach((s) => s.unsubscribe());
    }

    triggerSearch(query: string) {
        this.router.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: {
                search: query,
            },
            queryParamsHandling: 'merge',
        });
    }

    onCheckType(e: MatCheckboxChange) {
        const types = this.form.get('types') as FormArray;
        if (e.checked) {
            types.push(new FormControl(e.source.value));
        } else {
            let i = 0;
            types.controls.forEach((item) => {
                if (item.value === e.source.value) {
                    types.removeAt(i);
                    return;
                }
                i++;
            });
        }
    }

    private paginate() {
        let subs: Subscription;
        subs = this.resourceService
            .paginate({
                page: 0,
                pageSize: 50,
                filters: this.createFilters(),
            })
            .subscribe({
                next: (response) => {
                    this.dataSource = response.page;
                    subs?.unsubscribe();
                },
                error: (err) => {
                    console.error(err);
                    subs?.unsubscribe();
                },
            });
    }

    private createFilters(): ResourceFilters {
        const value = this.form.value;
        return {
            query: this.query,
            types: value.types as ResourceTypes[],
            sortBy: value.sortBy,
            status: value.status,
            date: value.date,
        };
    }

    private createSearchBar() {
        this.searchBar = {
            placeholder: 'Essayez une matière, une notion...',
            filterer: new SearchBarFuseFilterer<string>({
                dataSource: () => {
                    let suggestions: string[] = [];
                    this.form.value.types.forEach((type: ResourceTypes) => {
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
            }),
            trigger: new Subject<string>(),
            onTrigger: (query) => {
                this.query = query || '';
                this.paginate();
            },
            onEmpty: () => {
                this.query = '';
            },
        };
    }

    private createSuggestions() {
        this.subscriptions.push(
            this.resourceService.suggestions().subscribe(suggestions => {
                this.suggestions = suggestions;
            })
        );
    }

    private addFilterFormChangeListener() {
        /* this.subscriptions.push(
            this.form.valueChanges
                .pipe(
                    distinctUntilChanged(),
                    switchMap(async () => {
                        this.paginate();
                    })
                )
                .subscribe()
        ); */
    }

    private addRouterParamChangeListener() {
        this.subscriptions.push(
            this.activatedRoute.queryParams.subscribe((e) => {
                if (e.search) {
                    this.searchBar.trigger?.next(e.search);
                }
            })
        );
    }

}
