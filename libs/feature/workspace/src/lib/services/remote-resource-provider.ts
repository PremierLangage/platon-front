import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { PageResult } from '@platon/shared/utils';
import { Observable } from "rxjs";
import {
    Resource,
    ResourceCompletion,
    ResourceFilters,
    ResourceForm,
    ResourceVersion
} from "../models/resource";
import { ResourceProvider } from "../models/resource-provider";

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
        filters = filters || {};
        let params = new HttpParams();
        if (filters.search) {
            params = params.append('search', filters.search);
        }

        // circle
        if (filters.circle) {
            params = params.append('circle', filters.circle.toString());
        }

        // type
        if (filters.types) {
            filters.types.forEach(e => {
                params = params.append('type', e);
            });
        }

        if (filters.status) {
            params = params.append('status', filters.status);
        }

        if (filters.authors) {
            filters.authors.forEach(e => {
                params = params.append('author', e);
            });
        }

        // order

        if (filters.orderBy) {
            const ordering = ({
                'name': 'name',
                'date': '-updated_at',
            } as any)[filters.orderBy];
            params = params.append('ordering', ordering);
        }

        // date
        if (filters.updatedAt) {
            params = params.append('updated_at', filters.updatedAt.toString());
        }

        // pagination
        if (filters.limit) {
            params = params.append('limit', filters.limit.toString());
        }

        if (filters.offset) {
            params = params.append('offset', filters.offset.toString());
        }
        return this.http.get<PageResult<Resource>>(`/api/v1/resources/`, {
            params,
        });
    }

    findById(id: number): Observable<Resource> {
        return this.http.get<Resource>(`/api/v1/resources/${id}/`);
    }

    recentViews(): Observable<Resource[]> {
        return this.http.get<Resource[]>(`/api/v1/resources/recent-views/`);
    }

    createResource(form: ResourceForm): Observable<Resource> {
        return this.http.post<Resource>('api/v1/resources/', form);
    }

    findVersion(resource: Resource, version: number): Observable<ResourceVersion> {
        return this.http.get<ResourceVersion>(`${resource.versionsUrl}${version}/`);
    }

    listVersions(resource: Resource): Observable<PageResult<ResourceVersion>> {
        return this.http.get<PageResult<ResourceVersion>>(resource.versionsUrl);
    }

    createVersion(resource: Resource, message: string): Observable<ResourceVersion> {
        return this.http.post<ResourceVersion>(resource.versionsUrl, {
            status: resource.status,
            message,
        });
    }
}
