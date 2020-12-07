import { Injectable } from '@angular/core';
import { ConfigService } from '@platon/shared/utils';
import { Observable, of } from 'rxjs';
import { AuthUser } from '../models/auth-user';
import { AuthUserProvider, AuthUserFilters } from '../models/auth-user-provider';

@Injectable()
export class RemoteUserProvider extends AuthUserProvider {
    constructor(
        private readonly config: ConfigService
    ) {
        super();
    }

    injectable(): boolean {
        return this.config.isServerRunning;
    }

    search(filters: AuthUserFilters): Observable<AuthUser[]> {
        return of([]);
    }

    findById(uid: number): Observable<AuthUser | undefined> {
        throw new Error('Method not implemented.');
    }

    findAll(uid: number[]): Observable<AuthUser[]> {
        throw new Error('Method not implemented.');
    }
}
