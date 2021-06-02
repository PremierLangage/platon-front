import { Observable } from "rxjs";
import { Circle, CircleTree } from "./models";

export abstract class CircleProvider {
    abstract tree(): Observable<CircleTree>;
    abstract search(filters?: CircleFilters): Observable<CircleSearchResult>;
    abstract findById(id: number): Observable<Circle>;
    abstract findUserPersonal(): Observable<Circle>;
}

export interface CircleFilters {
    name?: string;
    search?: string;
    parent?: number;
    topics?: string[];
    levels?: string[];
    updatedAt?: 0 | 1 | 7 | 31 | 180 | 365;
    members?: string[];
    watchers?: string[];
    offset?: number;
    limit?: number;
    orderBy?: 'name' | 'updateAt' | 'membersCount' | 'watchersCount' | 'resourcesCount';
}

export interface CircleSearchResult {
    count: number;
    next: string;
    previous: string;
    results: Circle[];
}

