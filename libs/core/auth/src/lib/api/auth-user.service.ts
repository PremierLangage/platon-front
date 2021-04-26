import { Injectable } from '@angular/core';
import { combineLatest, Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { AuthUser } from '../models/auth-user';
import { AuthUserFilters, AuthUserProvider } from '../models/auth-user-provider';

/**
 * Facade class that will provide access to the user api of the platform.
 */
@Injectable({providedIn: 'root'})
export class AuthUserService {
    private users = new Map<string, AuthUser>();


    constructor(
        private readonly authUserProvider: AuthUserProvider
    ) { }

    search(filters: AuthUserFilters): Observable<AuthUser[]> {
        return this.authUserProvider.search(filters);
    }

    /**
     * Finds the user identified by `uid`.
     *
     * Note:
     * This method will make an http request only if the user is not cached in the memory.
     *
     * @param uid The identifier of the user to find.
     * @returns An observable that will emit the user found or `undefined` once the server will response.
     */
    findByUserName(userName: string): Observable<AuthUser | undefined> {
        const cache = this.users.get(userName);
        if (cache != null) {
            return of(cache);
        }
    
        return this.authUserProvider.findByUserName(userName).pipe(
            tap(user => {
                if (user != null) {
                    this.users.set(userName, user);
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
    findAllByUserNames(userNames: string[]): Observable<AuthUser[]> {
        const notCached: string[]  = [];
        const cacheElements = userNames.map(userName => {
            const user =  this.users.get(userName);
            if (user == null) {
                notCached.push(userName);
            }
            return user;
        }).filter(e => e != null) as AuthUser[];
        
        return combineLatest([
            of(cacheElements),
            this.authUserProvider.findAllByUserNames(notCached),
        ]).pipe(
            map(([fromCache, fromServer]) => {
                fromServer.forEach(e => {
                    this.users.set(e.userName, e);
                });
                return fromCache.concat(fromServer);
            })
        );
    }
}
