import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AuthUser } from '../models/auth-user';
import { AuthProvider } from '../models/auth-provider';
import { TokenService } from './token.service';


@Injectable()
export class RemoteAuthProvider extends AuthProvider {

    constructor(
        private readonly http: HttpClient,
        private readonly tokenService: TokenService,

    ) {
        super();
    }

    async current(): Promise<AuthUser | undefined> {
        const token = await this.tokenService.token();
        if (token) {
            try {
                return await this.http.get<AuthUser>('/api/auth/user/').toPromise();
            } catch {
                await this.tokenService.remove();
            }
        }
    }

    async signIn(username: string, password: string): Promise<AuthUser> {
        await this.tokenService.obtain(username, password);
        return this.http.get<AuthUser>('/api/auth/user/').toPromise();
    }

    async signOut(): Promise<void> {
        await this.tokenService.remove();
        await this.http.post('/api/auth/signout/', {}).toPromise();
    }
}
