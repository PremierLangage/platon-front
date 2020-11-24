import Fuse from 'fuse.js';

export interface SearchBarAutoCompletionGroup<T> {
  title: string;
  completions: Set<string>;
}

export interface SearchBar<T> {
    id: string;
    fuseOptions: Fuse.IFuseOptions<T>;
    dataSource: () => T[] | Promise<T[]>
    completionGroups: Record<string, string>;
}
