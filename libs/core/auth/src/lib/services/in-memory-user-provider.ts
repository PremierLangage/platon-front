import { Injectable } from '@angular/core';
import { ConfigService } from '@platon/shared/utils';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthUser } from '../models/auth-user';
import { AuthUserProvider } from '../models/auth-user-provider';
import { InMemoryUserDb } from './in-memory-user-db';
@Injectable()
export class InMemoryUserProvider extends AuthUserProvider {
    constructor(
        private readonly config: ConfigService,
        private readonly userDb: InMemoryUserDb,
    ) {
        super();
    }

    injectable(): boolean {
        return !this.config.isServerRunning;
    }

    findById(uid: number): Observable<AuthUser | undefined> {
        return this.userDb.read().pipe(
            map(arr => arr.find(e => e.id === uid))
        );
    }

    findAll(uid: number[]): Observable<AuthUser[]> {
        return this.userDb.read().pipe(
            map(arr => arr.filter(e => uid.includes(e.id)))
        );
    }

}
