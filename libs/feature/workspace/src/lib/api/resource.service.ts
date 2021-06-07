import { Injectable } from "@angular/core";
import { PageResult } from '@platon/shared/utils';
import { Observable } from "rxjs";
import { ResourceProvider } from "../models/resource-provider";
import {
    Resource,
    ResourceCompletion,
    ResourceFilters,
    ResourceForm,
    ResourceVersion
} from "../models/resource";

@Injectable({ providedIn: 'root' })
export class ResourceService {
    constructor(
        private readonly provider: ResourceProvider,
    ) { }

    completion(): Observable<ResourceCompletion> {
        return this.provider.completion();
    }

    search(filters?: ResourceFilters): Observable<PageResult<Resource>> {
        return this.provider.search(filters);

    }

    findById(id: number): Observable<Resource> {
        return this.provider.findById(id);
    }

    recentViews(): Observable<Resource[]> {
        return this.provider.recentViews();
    }

    createResource(form: ResourceForm): Observable<Resource> {
        return this.provider.createResource(form);
    }

    findVersion(resource: Resource, version: number): Observable<ResourceVersion> {
        return this.provider.findVersion(resource, version);
    }

    listVersions(resource: Resource): Observable<PageResult<ResourceVersion>> {
        return this.provider.listVersions(resource);

    }

    createVersion(resource: Resource, message: string): Observable<ResourceVersion> {
        return this.provider.createVersion(resource, message);
    }
}
