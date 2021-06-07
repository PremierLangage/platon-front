import { HttpClient } from "@angular/common/http";
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

@Injectable()
export class RemoteResourceProvider extends ResourceProvider {
    constructor(
        private readonly http: HttpClient,
    ) {
        super();
    }

    completion(): Observable<ResourceCompletion> {
        return this.http.get<ResourceCompletion>('/api/v1/resources/completion/');
    }

    search(filters?: ResourceFilters): Observable<PageResult<Resource>> {
        throw new Error("Method not implemented.");
    }
    findById(id: number): Observable<Resource> {
        throw new Error("Method not implemented.");
    }
    recentViews(): Observable<Resource[]> {
        throw new Error("Method not implemented.");
    }
    findVersion(resource: Resource, version: number): Observable<ResourceVersion> {
        throw new Error("Method not implemented.");
    }
    listVersions(): Observable<PageResult<ResourceVersion>> {
        throw new Error("Method not implemented.");
    }
    createVersion(resource: Resource, message: string): Observable<ResourceVersion> {
        throw new Error("Method not implemented.");
    }
}
