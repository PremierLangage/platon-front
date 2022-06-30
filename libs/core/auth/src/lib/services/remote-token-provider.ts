import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StorageService } from '@platon/shared/utils';
import { AuthToken } from '../models/auth-token';
import { JwtHelperService } from '@auth0/angular-jwt';
import { lastValueFrom } from 'rxjs';

const KEY = "auth-token";

/**
 * Handles JWT token generation/storage/refresh.
 */
@Injectable({providedIn: 'root'})
export class RemoteTokenProvider {

    constructor(
        private readonly http: HttpClient,
        private readonly storage: StorageService,
    ) { }

    /**
     * Gets the current auth token if it exists.
     * @returns A promise that resolves with an auth token or `undefined`.
     */
    token(): Promise<AuthToken | undefined> {
        return this.storage.get<AuthToken>(KEY).toPromise();
    }

    /** Deletes the current auth token */
    remove(): Promise<any> {
       return this.storage.remove(KEY).toPromise();
    }

    /**
     * Generates new auth token for the identified by `username`.
     *
     * Once the token is generared, it will be stored to the browser localStorage.
     * You must call `remove()` method to delete it.
     *
     * @param username An user name.
     * @param password An user password.
     * @returns A promise that resolves with an auth token.
     */
    async obtain(username: string, password: string): Promise<AuthToken> {
        const token = await lastValueFrom(this.http.post<AuthToken>('/api/v1/auth/sign-in/', {
            username: username,
            password
        }))

        await this.storage.set(KEY, token).toPromise();

        return token;
    }

    /**
     * Refreshs the current auth token.
     * @returns A promise that resolves with an auth token.
     */
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
            const newToken = await lastValueFrom(this.http.post<AuthToken>('/api/v1/auth/refresh/', {
                refresh: token.refresh
            }));

            token.access = newToken.access;

            await this.storage.set(KEY, token).toPromise();

            return token;
        } catch (error) {
            await this.remove();
            throw error;
        }
    }
}
