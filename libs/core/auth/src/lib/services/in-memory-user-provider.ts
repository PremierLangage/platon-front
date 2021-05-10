import { Injectable } from '@angular/core';
import Fuse from 'fuse.js';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthUser, AuthUserSearchIndexes } from '../models/auth-user';
import { AuthUserProvider, AuthUserFilters } from '../models/auth-user-provider';
import { InMemoryUserDb } from './in-memory-user-db';

@Injectable()
export class InMemoryUserProvider extends AuthUserProvider {

    constructor(
        private readonly userDb: InMemoryUserDb,
    ) {
        super();
    }

    search(filters: AuthUserFilters): Observable<AuthUser[]> {
        return this.userDb.read().pipe(
            map(users => {
                users = users.filter(item => {
                    const matches: boolean[] = [];
                    matches.push(filters.role === 'ALL' || filters.role === item.role);
                    return matches.every(match => !!match);
                });
                if (filters.query) {
                    const fuse = new Fuse<AuthUser>(users, {
                        includeMatches: true,
                        findAllMatches: false,
                        threshold: 0.2,
                        keys: [...AuthUserSearchIndexes]
                    });
                    users = [];
                    fuse.search(filters.query).forEach(match => {
                        users.push(match.item);
                    });
                }
                return users.sort((a, b) => a.userName.localeCompare(b.userName));
            })
        )
    }

    findByUserName(username: string): Observable<AuthUser | undefined> {
        return this.userDb.read().pipe(
            map(arr => arr.find(e => e.userName === username))
        );
    }

    findAllByUserNames(userNames: string[]): Observable<AuthUser[]> {
        return this.userDb.read().pipe(
            map(arr => arr.filter(e => userNames.includes(e.userName)))
        );
    }
}
