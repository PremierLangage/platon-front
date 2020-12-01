import { IDynamicService } from '@platon/shared/utils';
import { Observable } from 'rxjs';
import { Resource, ResourceStatus, ResourceTypes } from './resource';

export abstract class ResourceProvider implements IDynamicService {
    abstract injectable(): boolean;

    /**
     *  Builds a new resource filterer.
     */
    abstract filterer<T extends Resource>(): ResourceFilterer<T>;

    /**
     * Finds the resource of the given type identified by the given identifier.
     * @param args Arguments of the method.
     */
    abstract findById<T extends Resource>(
        args: ResourceFindByIdArgs
    ): Observable<T | undefined>;

    /**
     * Paginates resources of the given type from the server.
     * @param args Arguments of the method.
     */
    abstract paginate<T extends Resource>(
        args: ResourcePaginateArgs
    ): Observable<ResourcePaginateResult<T>>;
}

/**
 * Common filters to all the resource types.
 */
export interface ResourceFilters {
    /** Resource type to search. */
    type: ResourceTypes;
    /** Sort by name or date. */
    sortBy: 'name' | 'date';
    /** sort by update date (all, 1 day, 7 days, 1 month, 6 months, 1 year).  */
    updateDate: 0 | 1 | 7 | 31 | 180 | 365;
    /** Resource status to match */
    status: 'ALL' | ResourceStatus;
}

/**
 * Arguments of `ResourceFilterer` interface `filter` method.
 */
export interface ResourceFiltererArgs {
    /** Term to search */
    query: string;
    /** Extra filters */
    filters: ResourceFilters;
}

/**
 * Resource filter function result.
 */
export interface ResourceFiltererResult<T> {
    /** Matched resources */
    matches: T[];
    /** Auto suggestion strings. */
    completions: string[];
}

/**
 * Defines a function to filter resources.
 */
export interface ResourceFilterer<T extends Resource> {
    filter(
        args: ResourceFiltererArgs
    ): Promise<ResourceFiltererResult<T>>;
}

/**
 *  Arguments of the `findById` method of a resource provider.
 */
export interface ResourceFindByIdArgs {
    /** Identifier of the resource to search. */
    id: string;
    /** Type of the resource to search. */
    type: ResourceTypes;
}

/**
 *  Arguments of the `paginate` method of a resource provider.
 */
export interface ResourcePaginateArgs {
    /** Page number to search */
    page: number;
    /** Items per page */
    pageSize: number;
    /** Extra filters. */
    filters: ResourceFilters;
}

/**
 *  Result of the `paginate` method of a resource provider.
 */
export interface ResourcePaginateResult<T extends Resource> {
    /** Current page items. */
    page: T[];
    /** Total number of pages. */
    total: number;
}
