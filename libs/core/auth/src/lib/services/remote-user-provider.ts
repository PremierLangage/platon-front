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

    findByUserName(userName: string): Observable<AuthUser | undefined> {
        return this.http.get<AuthUser>(`/api/auth/users/${userName}`);
    }

    findAllByUserNames(userNames: string[]): Observable<AuthUser[]> {
        const merge = from(userNames).pipe(
            mergeMap(userName => this.findByUserName(userName)),
            toArray()
        );
        return merge as Observable<AuthUser[]>;
    }
}
