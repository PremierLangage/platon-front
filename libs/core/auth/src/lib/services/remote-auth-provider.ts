import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AuthUser } from '../models/auth-user';
import { AuthProvider } from '../models/auth-provider';
import { RemoteTokenProvider } from './remote-token-provider';


@Injectable()
export class RemoteAuthProvider extends AuthProvider {

    constructor(
        private readonly http: HttpClient,
        private readonly tokenProvider: RemoteTokenProvider,

    ) {
        super();
    }

    async current(): Promise<AuthUser | undefined> {
        const token = await this.tokenProvider.token();
        if (token) {
            try {
                return await this.http.get<AuthUser>('/api/v1/auth/user/').toPromise();
            } catch {
                await this.tokenProvider.remove();
            }
        }
    }

    async signIn(username: string, password: string): Promise<AuthUser> {
        await this.tokenProvider.obtain(username, password);
        return this.http.get<AuthUser>('/api/v1/auth/user/').toPromise();
    }

    async signOut(): Promise<void> {
        await Promise.all([
            this.tokenProvider.remove(),
            this.http.post('/api/v1/auth/sign-out/', {}).toPromise()
        ]);
    }
}
