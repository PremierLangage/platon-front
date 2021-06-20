import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { from, Observable, of } from 'rxjs';

import { AuthUser, AuthUserFilters } from '../models/auth-user';
import { AuthUserProvider } from '../models/auth-user-provider';
import { mergeMap, toArray } from 'rxjs/operators';
import { PageResult } from '@platon/shared/utils';


@Injectable()
export class RemoteUserProvider extends AuthUserProvider {
    constructor(private readonly http: HttpClient) {
        super();
    }

    search(filters: AuthUserFilters): Observable<PageResult<AuthUser>> {
        filters = filters || {};
        let params = new HttpParams();
        if (filters.search) {
            params = params.append('search', filters.search);
        }

        // role
        if (filters.admin != null) {
            params = params.append('is_admin', filters.admin.toString());
        }

        if (filters.editor != null) {
            params = params.append('is_editor', filters.editor.toString());
        }

        // pagination
        if (filters.limit) {
            params = params.append('limit', filters.limit.toString());
        }

        if (filters.offset) {
            params = params.append('offset', filters.offset.toString());
        }

        return this.http.get<PageResult<AuthUser>>(`/api/v1/users/`, {
            params,
        });
    }

    findByUserName(username: string): Observable<AuthUser | undefined> {
        return this.http.get<AuthUser>(`/api/v1/users/${username}/`);
    }

    findAllByUserNames(userNames: string[]): Observable<AuthUser[]> {
        const merge = from(userNames).pipe(
            mergeMap(username => this.findByUserName(username)),
            toArray()
        );
        return merge as Observable<AuthUser[]>;
    }
}
