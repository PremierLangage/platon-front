import { HttpClient, HttpParams,  } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CircleFilters, CircleSearchResult, CircleProvider } from "../models/circle-provider";
import { Circle, CircleTree } from "../models/models";

@Injectable()
export class RemoteCircleProvider extends CircleProvider {
    constructor(
        private readonly http: HttpClient,
    ) {
        super();
    }

    tree(): Observable<CircleTree> {
        return this.http.get<CircleTree>('/api/v1/circles/tree');
    }

    search(filters?: CircleFilters): Observable<CircleSearchResult> {
        filters = filters || {};
        let params = new HttpParams();
        if (filters.watchers) {
            filters.watchers.forEach(e => {
                params = params.append('watcher', e);
            });
        }

        if (filters.limit) {
            params = params.append('limit', filters.limit.toString());
        }

        if (filters.offset) {
            params = params.append('offset', filters.offset.toString());
        }

        return this.http.get<CircleSearchResult>(`/api/v1/circles`, {
            params,
        });
    }

    findById(id: number): Observable<Circle> {
        return this.http.get<Circle>('/api/v1/circles/me/' + id);
    }

    findUserPersonal(): Observable<Circle> {
        return this.http.get<Circle>('/api/v1/circles/me');
    }
}
