import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StorageService } from '@platon/shared/utils';
import { AuthToken } from '../models/auth-token';
import { JwtHelperService } from '@auth0/angular-jwt';

const KEY = "auth-token";

@Injectable({providedIn: 'root'})
export class TokenService {

    constructor(
        private readonly http: HttpClient,
        private readonly storage: StorageService,
    ) { }


    set(token: AuthToken): Promise<any> {
        return this.storage.set(KEY, token).toPromise();
    }

    token(): Promise<AuthToken | undefined> {
        return this.storage.get<AuthToken>(KEY).toPromise();
    }

    remove(): Promise<any> {
       return this.storage.remove(KEY).toPromise();
    }

    async obtain(username: string, password: string) {
        const token = await this.http.post<AuthToken>('/api/auth/signin/', {
            username, password
        }).toPromise();

        await this.storage.set(KEY, token).toPromise();

        return token;
    }

    async refresh(): Promise<AuthToken> {
        const token = await this.token();
        if (!token) {
            throw new Error('auth/no-token');
        }

        const helper = new JwtHelperService();
        if (helper.isTokenExpired(token.refresh)) {
            await this.remove();
            throw new Error('auth/refresh-token-expired');
        }

        try {
            const newToken = await this.http.post<AuthToken>('/api/auth/refresh/', {
                refresh: token.refresh
            }).toPromise();

            token.access = newToken.access;

            await this.storage.set(KEY, token).toPromise();

            return token;
        } catch (error) {
            await this.remove();
            throw error;
        }
    }
}
