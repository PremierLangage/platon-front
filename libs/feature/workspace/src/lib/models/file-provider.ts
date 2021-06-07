import { PageResult } from '@platon/shared/utils';
import { Observable } from "rxjs";
import {
    Resource,
    ResourceCompletion,
    ResourceFilters,
    ResourceVersion
} from "./resource";

export abstract class ResourceProvider {
    abstract completion(): Observable<ResourceCompletion>;

    abstract search(filters?: ResourceFilters): Observable<PageResult<Resource>>;
    abstract findById(id: number): Observable<Resource>;
    abstract recentViews(): Observable<Resource[]>;

    abstract findVersion(resource: Resource, version: number): Observable<ResourceVersion>;
    abstract listVersions(): Observable<PageResult<ResourceVersion>>;
    abstract createVersion(resource: Resource, message: string): Observable<ResourceVersion>;
}
