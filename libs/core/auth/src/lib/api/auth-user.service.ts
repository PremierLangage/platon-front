import { Injectable } from '@angular/core';
import { DynamicInjectorService } from '@platon/shared/utils';
import { combineLatest, Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { AuthUser } from '../models/auth-user';
import { AuthUserProvider } from '../models/auth-user-provider';

/**
 * Facade class that will provide access to the user api of the platform.
 */
@Injectable({providedIn: 'root'})
export class AuthUserService {
    private users = new Map<string, AuthUser>();

    private get provider() {
        return this.dynamicInjector.get<AuthUserProvider>(AuthUserProvider);
    }

    constructor(
        private readonly dynamicInjector: DynamicInjectorService
    ) { }

    /**
     * Finds the user identified by `uid`.
     *
     * Note:
     * This method will make an http request only if the user is not cached in the memory.
     *
     * @param uid The identifier of the user to find.
     * @returns An observable that will emit the user found or `undefined` once the server will response.
     */
    findById(uid: string): Observable<AuthUser | undefined> {
        const cache = this.users.get(uid);
        if (cache != null) {
            return of(cache);
        }
        return this.provider.findById(uid).pipe(
            tap(user => {
                if (user != null) {
                    this.users.set(uid, user);
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
    findAll(uids: string[]): Observable<AuthUser[]> {
        const notCached: string[]  = [];
        const cacheElements = uids.map(uid => {
            const user =  this.users.get(uid);
            if (user == null) {
                notCached.push(uid);
            }
            return user;
        }).filter(e => e != null) as AuthUser[];
        return combineLatest([
            of(cacheElements),
            this.provider.findAll(notCached),
        ]).pipe(
            map(([fromCache, fromServer]) => {
                fromServer.forEach(e => {
                    this.users.set(e.id, e);
                });
                return fromCache.concat(fromServer);
            })
        );
    }

}
