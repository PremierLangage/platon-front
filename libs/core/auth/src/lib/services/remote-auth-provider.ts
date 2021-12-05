import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AuthUser } from '../models/auth-user';
import { AuthProvider } from '../models/auth-provider';
import { RemoteTokenProvider } from './remote-token-provider';
import { AuthToken } from '../models/auth-token';


@Injectable()
export class RemoteAuthProvider extends AuthProvider {

    constructor(
        private readonly http: HttpClient,
        private readonly tokenProvider: RemoteTokenProvider,

    ) {
        super();
    }

    token(): Promise<AuthToken | undefined> {
        return this.tokenProvider.token();
    }

    async current(): Promise<AuthUser | undefined> {
        const token = await this.tokenProvider.token();
        if (token) {
            try {
                return await this.http.get<AuthUser>('/api/v1/users/me/').toPromise();
            } catch {
                await this.tokenProvider.remove();
            }
        }
        return undefined;
    }

    async signIn(username: string, password: string): Promise<AuthUser> {
        await this.tokenProvider.obtain(username, password);
        return this.http.get<AuthUser>('/api/v1/users/me/').toPromise();
    }

    async signOut(): Promise<void> {
        await this.http.post('/api/v1/auth/sign-out/', {}).toPromise();
        await this.tokenProvider.remove();
    }
}
