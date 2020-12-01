import Fuse from 'fuse.js';
import { Subject } from 'rxjs';

export interface SearchBarAutoCompletionGroup<T> {
  title: string;
  completions: Set<string>;
}

export interface SearchBar<T> {
    trigger?: Subject<string>;
    onChange?: (response: SearchBarFiltererResult<T>) => void;
    placeholder?: string;
    filterer: SearchBarFilterer<T>;
}

export interface SearchBarFilterer<T> {
    filter(query: string): Promise<SearchBarFiltererResult<T>>;
}
export interface SearchBarFiltererResult<T> {
    completions: SearchBarAutoCompletionGroup<T>[],
    queryMatches: T[];
}
export class SearchBarFuseFilterer<T> implements SearchBarFilterer<T> {

    constructor(
        private readonly options: {
            dataSource: () => T[] | Promise<T[]>
            fuseOptions: Fuse.IFuseOptions<T>,
            completionGroups: Record<string, string>
        }
    ) {}

    async filter(query: string): Promise<SearchBarFiltererResult<T>> {
        const dataSource = await this.options.dataSource();
        if (!query) {
            return {
                completions: [],
                queryMatches: dataSource
            };
        }

        const groups: SearchBarAutoCompletionGroup<any>[] = [];
        Object.entries(this.options.completionGroups).forEach(([_, v]) => {
            groups.push({
                title: v,
                completions: new Set()
            });
        });

        const fuse = new Fuse(dataSource, this.options.fuseOptions);
        const items: any[] = [];
        fuse.search(query).forEach(r => {
            const { item, matches } = r;
            items.push(item);
            (matches || []).forEach(match => {
                const title = this.options.completionGroups[match.key as string];
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

        return {
            completions: groups.filter(g => !!g.completions.size),
            queryMatches: items
        };
    }
}
