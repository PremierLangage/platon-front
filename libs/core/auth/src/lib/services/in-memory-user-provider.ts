import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from '@platon/shared/utils';
import { Observable } from 'rxjs';
import { map, shareReplay, take } from 'rxjs/operators';
import { AuthUser } from '../models/auth-user';
import { AuthUserProvider } from '../models/auth-user-provider';


@Injectable()
export class InMemoryUserProvider extends AuthUserProvider {
    private request?: Observable<AuthUser[]>;

    constructor(
        private readonly http: HttpClient,
        private readonly config: ConfigService
    ) {
        super();
    }

    injectable(): boolean {
        return this.config.isDemo;
    }

    findById(uid: string): Observable<AuthUser | undefined> {
        return this.database().pipe(
            map(arr => arr.find(e => e.id === uid))
        );
    }

    findAll(uid: string[]): Observable<AuthUser[]> {
        return this.database().pipe(
            map(arr => arr.filter(e => uid.includes(e.id)))
        );
    }

    private database(): Observable<AuthUser[]> {
        if (this.request) {
            return this.request;
        }
        return this.request = this.http.get<AuthUser[]>('assets/mocks/users.json').pipe(
            take(1),
            shareReplay(1)
        );
    }
}
