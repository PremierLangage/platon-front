import { Injectable } from "@angular/core";
import { PageResult } from '@platon/shared/utils';
import { Observable } from "rxjs";
import { ResourceProvider } from "../models/file-provider";
import {
    Resource,
    ResourceCompletion,
    ResourceFilters,
    ResourceVersion
} from "../models/resource";

@Injectable({ providedIn: 'root' })
export class RemoteResourceProvider {
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
    findVersion(resource: Resource, version: number): Observable<ResourceVersion> {
        return this.provider.findVersion(resource, version);
    }
    listVersions(): Observable<PageResult<ResourceVersion>> {
        return this.provider.listVersions();

    }
    createVersion(resource: Resource, message: string): Observable<ResourceVersion> {
        return this.provider.createVersion(resource, message);
    }
}
