import { Injectable } from '@angular/core';
import { ConfigService } from '@platon/shared/utils';
import { Observable } from 'rxjs';
import { AuthUser } from '../models/auth-user';
import { AuthUserProvider } from '../models/auth-user-provider';

@Injectable()
export class RemoteUserProvider extends AuthUserProvider {
    constructor(
        private readonly config: ConfigService
    ) {
        super();
    }

    injectable(): boolean {
        return !this.config.isDemo;
    }

    findById(uid: string): Observable<AuthUser | undefined> {
        throw new Error('Method not implemented.');
    }

    findAll(uid: string[]): Observable<AuthUser[]> {
        throw new Error('Method not implemented.');
    }
}
