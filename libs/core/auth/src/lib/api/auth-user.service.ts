import { Injectable } from '@angular/core';
import { PageResult } from '@platon/shared/utils';
import { combineLatest, Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { AuthUser, AuthUserFilters } from '../models/auth-user';
import { AuthUserProvider } from '../models/auth-user-provider';

/**
 * Facade class that will provide access to the user api of the platform.
 */
@Injectable({ providedIn: 'root' })
export class AuthUserService {
    private users = new Map<string, AuthUser>();

    constructor(
        private readonly authUserProvider: AuthUserProvider
    ) { }

    search(filters: AuthUserFilters): Observable<PageResult<AuthUser>> {
        return this.authUserProvider.search(filters);
    }

    /**
     * Finds the user identified by `username`.
     *
     * Note:
     * This method will make an http request only if the user is not cached in the memory.
     *
     * @param username The name of the user to find.
     * @returns An observable that will emit the user found or `undefined` once the server will response.
     */
    findByUserName(username: string): Observable<AuthUser | undefined> {
        const cache = this.users.get(username);
        if (cache != null) {
            return of(cache);
        }

        return this.authUserProvider.findByUserName(username).pipe(
            tap(user => {
                if (user != null) {
                    this.users.set(username, user);
                }
            })
        );
    }

    /**
     * Finds ALl the users listed in the `uids` array.
     *
     * Note:
     * This method will make an http request only if the users that are not cached in the memory.
     *
     * @param uid An array of user identifiers to find.
     * @returns An observable that will emit the user found or `undefined` once the server will response.
     */
    findAllByUserNames(usernames: string[]): Observable<AuthUser[]> {
        const notCached: string[] = [];
        const cacheElements = usernames.map(username => {
            const user = this.users.get(username);
            if (user == null) {
                notCached.push(username);
            }
            return user;
        }).filter(e => e != null) as AuthUser[];

        return combineLatest([
            of(cacheElements),
            this.authUserProvider.findAllByUserNames(notCached),
        ]).pipe(
            map(([fromCache, fromServer]) => {
                fromServer.forEach(e => {
                    this.users.set(e.username, e);
                });
                return fromCache.concat(fromServer);
            })
        );
    }
}
