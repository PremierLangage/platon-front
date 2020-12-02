import {
    Component,
    Input,
    OnDestroy,
    OnInit,
    TemplateRef,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
    Circle,
    Resource,
    ResourceFilters,
    ResourceService,
    ResourceTypes,
} from '@platon/feature/workspace';
import { SearchBar, SearchBarFiltererResult } from '@platon/shared/ui';
import { Subject, Subscription } from 'rxjs';
import { distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
    selector: 'app-ws-search-view',
    templateUrl: './search-view.component.html',
    styleUrls: ['./search-view.component.scss'],
})
export class SearchViewComponent implements OnInit, OnDestroy {
    private readonly subscriptions: Subscription[] = [];
    private readonly resourceFilterer = this.resourceService.filterer<
        Resource
    >();

    @Input() type!: string;
    @Input() searchBarPlaceholder = '';

    @Input() bannerTitle!: string;
    @Input() bannerImage!: string;
    @Input() bannerDescription!: string;
    @Input() bannerCompletion?: TemplateRef<any>;
    @Input() bannerSearchBar?: SearchBar<any>;

    @Input() bannerActionsTemplate!: TemplateRef<any>;

    searchBar!: SearchBar<Resource>;
    searchBarQuery = '';
    dataSource: Resource[] = [];
    paginationSource: Resource[] = [];

    form = new FormGroup({
        sortBy: new FormControl('name'),
        status: new FormControl('ALL'),
        date: new FormControl(0),
    });

    constructor(
        private readonly router: Router,
        private readonly activatedRoute: ActivatedRoute,
        private readonly resourceService: ResourceService
    ) {}

    ngOnInit() {
        this.paginate();
        this.createSearchBar();
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

    private paginate() {
        let subs: Subscription;
        subs = this.resourceService
            .paginate<Circle>({
                page: 0,
                pageSize: 30,
                filters: this.createFilters(),
            })
            .subscribe({
                next: (response) => {
                    this.dataSource = response.page;
                    this.paginationSource = response.page;
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
            type: this.type as ResourceTypes,
            sortBy: value.sortBy,
            status: value.status,
            updateDate: value.date,
        };
    }

    private createSearchBar() {
        this.searchBar = {
            placeholder: this.searchBarPlaceholder || '',
            filterer: {
                filter: this.filter.bind(this),
            },
            trigger: new Subject<string>(),
            onChange: (response) => (this.dataSource = response.queryMatches),
            onEmpty: () => {
                this.searchBarQuery = '';
                this.dataSource = this.paginationSource;
            },
        };
    }

    private addFilterFormChangeListener() {
        this.subscriptions.push(
            this.form.valueChanges
                .pipe(
                    distinctUntilChanged(),
                    switchMap(async () => {
                        if (this.searchBarQuery) {
                            const response = await this.filter(
                                this.searchBarQuery
                            );
                            this.dataSource = response.queryMatches;
                        } else {
                            this.paginate();
                        }
                    })
                )
                .subscribe()
        );
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

    private async filter(
        query: string
    ): Promise<SearchBarFiltererResult<Resource>> {
        this.searchBarQuery = query;
        const response = await this.resourceFilterer.filter({
            query,
            filters: this.createFilters(),
        });
        return {
            completions: [
                {
                    title: 'Résultat',
                    completions: response.completions,
                },
            ],
            queryMatches: response.matches,
        };
    }
}
