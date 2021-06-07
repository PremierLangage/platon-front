import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService, AuthUser } from '@platon/core/auth';
import { CircleCompletion, CircleFilters, CircleService, CircleTree, Resource, ResourceFilters } from '@platon/feature/workspace';
import { SearchBar } from '@platon/shared/ui/search';
import { PageResult } from '@platon/shared/utils';
import Fuse from 'fuse.js';
import { of, Subscription } from 'rxjs';

@Component({
    selector: 'app-resource-search',
    templateUrl: './resource-search.component.html',
    styleUrls: ['./resource-search.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResourceSearchComponent implements OnInit, OnDestroy {
    private readonly subscriptions: Subscription[] = [];

    tree?: CircleTree;
    user?: AuthUser;
    filter: ResourceFilters = {};
    page: PageResult<Resource> = {
        count: 0,
        results: []
    };
    completion: CircleCompletion = {
        names: [],
        topics: [],
        levels: []
    };

    searching = true;
    initialRequest = true;

    readonly searchBar: SearchBar<string> = {
        placeholder: 'Essayez un nom, un topic, un niveau...',
        filterer: {
            run: (query) => {
                const suggestions = new Set<string>([
                    ...this.completion.names,
                    ...this.completion.topics,
                    ...this.completion.levels,
                ]);
                return of(new Fuse(Array.from(suggestions), {
                    includeMatches: true,
                    findAllMatches: false,
                    threshold: 0.2,
                }).search(query).map(e => e.item));
            },
        },
        onSearch: this.search.bind(this),
    };

    constructor(
        private readonly router: Router,
        private readonly authService: AuthService,
        private readonly circleService: CircleService,
        private readonly activatedRoute: ActivatedRoute,
        private readonly changeDetectorRef: ChangeDetectorRef,
    ) { }

    async ngOnInit(): Promise<void> {
        const [user] = await Promise.all([
            this.authService.ready(),
        ]);
        this.user = user;
        this.changeDetectorRef.detectChanges();
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach((s) => s.unsubscribe());
    }

    async search(query?: string) {
        if (query != null) {
            this.filter.search = query;
        }

        const queryParams: Params = {
            q: this.filter.search,
            date: this.filter.updatedAt,
            order: this.filter.orderBy,
            status: this.filter.status,
            visibility: 'all',
            types: (this.filter.types || []).map(e => e.toLowerCase()).join('|'),
        };

        if (this.filter.authors) {
            queryParams['visibility'] = 'authored';
        }

        this.router.navigate([], {
            queryParams,
            relativeTo: this.activatedRoute,
            queryParamsHandling: 'merge',
        });

        this.searching = true;
        //this.page = await this.circleService.search(this.filter).toPromise();
        this.searching = false;
        this.changeDetectorRef.markForCheck();
    }

    onTapTag(tag: string) {
        this.searchBar.value = tag;
    }

    onChangeFilter(filter: CircleFilters) {
        if (this.initialRequest || this.searchBar.value !== filter.search) {
            this.initialRequest = false;
            this.searchBar.value = filter.search; // will trigger search()
        }
    }
}
