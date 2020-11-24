import { Injectable } from '@angular/core';
import { SearchBar, SearchBarAutoCompletionGroup } from './search-bar';
import { Subject } from 'rxjs';
import Fuse from 'fuse.js';

@Injectable({ providedIn: 'root' })
export class SearchBarService {
    private readonly searchBars = new Map<string, SearchBar<any>>();
    private readonly searchBarsResults = new Map<string, any[]>();
    private readonly queries = new Map<string, string | undefined>();
    private readonly queryChangeEvent = new Subject<{
        query?: string,
        searchBarId: string;
    }>();

    get onChangeQuery() {
        return this.queryChangeEvent.asObservable();
    }

    async search(searchBarId: string, query?: string) {
        const searchBar = this.searchBars.get(searchBarId);
        if (!searchBar) {
            throw new Error(
                `[SearchBarService]: unregistered search bar id '${searchBarId}'`
            );
        }
        this.queries.set(searchBar.id, query);

        const dataSource = await searchBar.dataSource();
        if (!query) {
            this.searchBarsResults.set(searchBar.id, await searchBar.dataSource());
            this.queryChangeEvent.next({
                query,
                searchBarId: searchBar.id,
            });
            return [];
        }

        const groups: SearchBarAutoCompletionGroup<any>[] = [];
        Object.entries(searchBar.completionGroups).forEach(([_, v]) => {
            groups.push({
                title: v,
                completions: new Set()
            });
        });

        const fuse = new Fuse(dataSource, searchBar.fuseOptions);
        const items: any[] = [];
        fuse.search(query).forEach(r => {
            const { item, matches } = r;
            items.push(item);
            (matches || []).forEach(match => {
                const title = searchBar.completionGroups[match.key as string];
                const group = groups.find(g => {
                    return g.title === title;
                });
                if (group && match.value) {
                    if (!group.completions.has(match.value)) {
                        group.completions.add(match.value);
                    }
                }
            });
        });

        this.searchBarsResults.set(searchBar.id, items);

        this.queryChangeEvent.next({
            query,
            searchBarId: searchBar.id,
        });

        return groups.filter(g => !!g.completions.size);
    }

    async register<T>(searchBar: SearchBar<T>) {
        this.searchBars.set(searchBar.id, searchBar);
        this.searchBarsResults.set(searchBar.id, await searchBar.dataSource());
    }

    unregister(id: string) {
        this.queries.delete(id);
        this.searchBars.delete(id);
        this.searchBarsResults.delete(id);
    }

    isEmpty(searchBarId: string) {
        return !this.searchBarsResults.get(searchBarId)?.length;
    }

    hasQuery(searchBarId: string) {
        return !!this.queries.get(searchBarId);
    }

    getQuery(searchBarId: string) {
        return this.queries.get(searchBarId);
    }

    dataSource<T>(searchBarId: string): T[] {
        return this.searchBarsResults.get(searchBarId) || [];
    }

}
