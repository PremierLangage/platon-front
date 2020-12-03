import Fuse from 'fuse.js';
import { Subject } from 'rxjs';

export interface SearchBarAutoCompletionGroup<T> {
  title: string;
  completions: string[];
}

export interface SearchBar<T> {
    /**
     * Current value of the search bar.
     *
     * Notes:
     * - updating the value will call `onTrigger`
     * - `onTrigger` is called after ngOnInit with the initial value.
     */
    value?: string;
    /** Filterer object. */
    filterer: SearchBarFilterer<T>;
    /** Search bar placeholder value. */
    placeholder?: string;
    /**
     * A callback function to call when the search bar is empty.
     */
    onEmpty?: () => void;
    /** A callback function to call when the sear */
    onReady?: () => void;
    /**
     * A callback function to call when the search bar query is submitted.
     * @param query the query to run.
     */
    onTrigger?: (query: string) => void;
    /**
     * A callback function to call when suggestions change.
     */
    onSuggest?: (response: SearchBarSuggestions<T>) => void;
}

export interface SearchBarFilterer<T> {
    run(query: string): Promise<SearchBarSuggestions<T>>;
}

export interface SearchBarSuggestions<T> {
    /** Items that match the query. */
    matches: T[];
    /** Suggestion list */
    suggestions: SearchBarAutoCompletionGroup<T>[],
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

    async run(query: string): Promise<SearchBarSuggestions<T>> {
        const dataSource = await this.options.dataSource();
        if (!query) {
            return {
                suggestions: [],
                matches: dataSource
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
            matches: items,
            suggestions: groups.filter(g => !!g.completions.length),
        };
    }
}
