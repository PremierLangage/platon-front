import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CircleFilters, CircleSearchResult, CircleProvider } from '../models/circle-provider';
import { Circle, CircleTree } from '../models/models';

@Injectable({providedIn: 'root'})
export class CircleService {

    constructor(
        private readonly provider: CircleProvider,
    ) { }

    tree(): Observable<CircleTree> {
        return this.provider.tree();
    }

    search(filters?: CircleFilters): Observable<CircleSearchResult> {
        return this.provider.search(filters);
    }

    findById(id: number): Observable<Circle> {
        return this.provider.findById(id);
    }

    findUserPersonal(): Observable<Circle> {
        return this.provider.findUserPersonal();
    }

    findWatchedBy(username: string): Observable<CircleSearchResult> {
        return this.provider.search({
            limit: 5,
            watchers: [username]
        });
    }
}
