import { AuthChange, AuthObserver } from '@platon/core/auth';
import { IDynamicService } from '@platon/shared/utils';
import { Observable } from 'rxjs';
import { ResourceEvent, Member, Resource, ResourceStatus, ResourceTypes } from './resource';

export abstract class ResourceProvider implements AuthObserver, IDynamicService {
    abstract injectable(): boolean;
    abstract onChangeAuth(change: AuthChange): void | Promise<void>;

    abstract suggestions(): Observable<Record<ResourceTypes, string[]>>;

    /**
     * Finds the resource of the given type identified by the given identifier.
     * @param args Arguments of the method.
     */
    abstract findById<T extends Resource>(args: ResourceFindByIdArgs): Observable<T | undefined>;

    abstract update(resource: Resource): Promise<void>;

    /**
     * Paginates resources of the given type from the server.
     * @param args Arguments of the method.
     */
    abstract paginate(args: ResourcePaginateArgs): Observable<ResourcePaginateResult>;


    abstract addEvent(event: ResourceEvent): Promise<void>;
    abstract removeEvent(event: ResourceEvent): Promise<void>;
    abstract listEvents(args: ResourceListEventsArgs): Observable<ResourceEvent[]>;


    abstract addMember(member: Member): Promise<void>;
    abstract removeMember(member: Member): Promise<void>;
    abstract updateMember(member: Member): Promise<void>;
    abstract listMembers(circleId: number): Observable<Member[]>;

}

/**
 * Common filters to all the resource types.
 */
export interface ResourceFilters {
    /** Term to search */
    query?: string;
    /** Resource types to search. */
    types: ResourceTypes[];
    /** Sort by name or date. */
    sortBy: 'name' | 'date';
    /** sort by update date (all, 1 day, 7 days, 1 month, 6 months, 1 year).  */
    date: 0 | 1 | 7 | 31 | 180 | 365;
    /** Resource status to match */
    status: 'ALL' | ResourceStatus;
    /** Search exercises and activities in a specific circle. */
    circleId?: number;
}


/**
 *  Arguments of the `findById` method of a resource provider.
 */
export interface ResourceFindByIdArgs {
    /** Identifier of the resource to search. */
    id: number;
    /** Type of the resource to search. */
    type: ResourceTypes;
}

/**
 *  Arguments of the `paginate` method of a resource provider.
 */
export interface ResourcePaginateArgs {
    /** Current page index in the pagination. */
    page: number;
    /** Items per page */
    pageSize: number;
    /** Extra filters. */
    filters: ResourceFilters;
}

/**
 *  Result of the `paginate` method of a resource provider.
 */
export interface ResourcePaginateResult {
    /** Current page items. */
    page: Resource[];
    /** Total number of pages. */
    total: number;
}

export interface ResourceListEventsArgs {
    resourceId: number;
    resourceType: ResourceTypes;
}
