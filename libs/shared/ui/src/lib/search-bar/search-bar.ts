import Fuse from 'fuse.js';
import { Subject } from 'rxjs';

export interface SearchBarAutoCompletionGroup<T> {
  title: string;
  completions: string[];
}

export interface SearchBar<T> {
    trigger?: Subject<string>;
    filterer: SearchBarFilterer<T>;
    onEmpty?: () => void;
    onTrigger?: (query?: string) => void;
    onSuggest?: (response: SearchBarFiltererResult<T>) => void;
    placeholder?: string;
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
            completionGroups?: Record<string, string>
            defaultCompletionGroup?: string;
        }
    ) {
        options.defaultCompletionGroup = options.defaultCompletionGroup || ''
    }

    async filter(query: string): Promise<SearchBarFiltererResult<T>> {
        const dataSource = await this.options.dataSource();
        if (!query) {
            return {
                completions: [],
                queryMatches: dataSource
            };
        }

        const groups: SearchBarAutoCompletionGroup<any>[] = [{
            title: this.options.defaultCompletionGroup || '',
            completions: []
        }];

        const completionGroups = this.options.completionGroups || {};
        Object.entries(completionGroups).forEach(([_, title]) => {
            groups.push({
                title,
                completions: []
            });
        });

        const fuse = new Fuse(dataSource, this.options.fuseOptions);
        const items: any[] = [];
        fuse.search(query).forEach(r => {
            const { item, matches } = r;
            items.push(item);
            (matches || []).forEach(match => {
                const title = completionGroups[match.key as string]
                    || this.options.defaultCompletionGroup
                    || '';
                const group = groups.find(g => {
                    return g.title === title;
                });
                if (group != null && match.value) {
                    if (!group.completions.includes(match.value)) {
                        group.completions.push(match.value);
                    }
                }
            });
        });

        return {
            completions: groups.filter(g => !!g.completions.length),
            queryMatches: items
        };
    }
}
