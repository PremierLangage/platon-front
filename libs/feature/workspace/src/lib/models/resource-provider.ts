import { PageResult } from '@platon/shared/utils';
import { Observable } from "rxjs";
import {
    CreateResourceForm,
    Resource,
    ResourceCompletion,
    ResourceFilters,
    ResourceVersion,
    UpdateResourceForm
} from "./resource";

export abstract class ResourceProvider {
    abstract completion(): Observable<ResourceCompletion>;

    abstract search(filters?: ResourceFilters): Observable<PageResult<Resource>>;
    abstract findById(id: number): Observable<Resource>;
    abstract recentViews(): Observable<Resource[]>;
    abstract createResource(form: CreateResourceForm): Observable<Resource>;
    abstract updateResource(form: UpdateResourceForm): Observable<Resource>;
    abstract deleteResource(resource: Resource): Observable<any>;

    abstract findVersion(resource: Resource, version: number): Observable<ResourceVersion>;
    abstract listVersions(resource: Resource): Observable<PageResult<ResourceVersion>>;
    abstract createVersion(resource: Resource, message: string): Observable<ResourceVersion>;
}
