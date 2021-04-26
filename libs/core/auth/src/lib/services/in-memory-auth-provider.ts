import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { AuthProvider } from '../models/auth-provider';
import { AuthUser } from '../models/auth-user';
import { InMemoryUserDb } from './in-memory-user-db';

@Injectable()
export class InMemoryAuthProvider extends AuthProvider {
    private user?: AuthUser;

    constructor(
        private readonly database: InMemoryUserDb,
    ) {
        super();
    }

    async current(): Promise<AuthUser | undefined> {
        return this.user;
    }

    async signIn(username: string, password: string): Promise<AuthUser> {
        const user = await this.database.read().pipe(
            map(arr => arr.find(e => e.userName === username))
        ).toPromise();

        if (!user) {
            throw new Error(`[auth/invalid-username]: ${username}`);
        }

        return this.user = user;
    }

    async signOut(): Promise<void> {
        this.user = undefined;
        return Promise.resolve();
    }
}
