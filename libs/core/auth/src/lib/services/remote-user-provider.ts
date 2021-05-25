import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable, of } from 'rxjs';

import { AuthUser } from '../models/auth-user';
import { AuthUserProvider, AuthUserFilters } from '../models/auth-user-provider';
import { mergeMap, toArray } from 'rxjs/operators';


@Injectable()
export class RemoteUserProvider extends AuthUserProvider {
    constructor(
        private readonly http: HttpClient,
    ) {
        super();
    }

    search(filters: AuthUserFilters): Observable<AuthUser[]> {
        return of([]);
    }

    findByUserName(username: string): Observable<AuthUser | undefined> {
        return this.http.get<AuthUser>(`/api/v1/auth/users/${username}`);
    }

    findAllByUserNames(userNames: string[]): Observable<AuthUser[]> {
        const merge = from(userNames).pipe(
            mergeMap(username => this.findByUserName(username)),
            toArray()
        );
        return merge as Observable<AuthUser[]>;
    }
}
