import { Injectable } from '@angular/core';
import { ConfigService } from '@platon/shared/utils';
import { map } from 'rxjs/operators';
import { AuthProvider } from '../models/auth-provider';
import { InMemoryUserDb } from './in-memory-user-db';

const LOCAL_STORAGE_KEY = 'IN-MEMORY_AUTH_UID';

@Injectable()
export class InMemoryAuthProvider extends AuthProvider {
    private userId?: string;

    constructor(
        private readonly config: ConfigService,
        private readonly database: InMemoryUserDb,
    ) {
        super();
    }

    injectable(): boolean {
        return !this.config.isServerRunning;
    }

    uid(): Promise<string | undefined> {
        const id = this.userId || localStorage.getItem(LOCAL_STORAGE_KEY) || undefined;
        return Promise.resolve(id);
    }

    signOut(): Promise<void> {
        this.userId = undefined;
        localStorage.removeItem(LOCAL_STORAGE_KEY);
        return Promise.resolve();
    }

    async signInWithEmailAndPassword(email: string, password: string): Promise<void> {
        await new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, 1000);
        });

        const user = await this.database.read().pipe(
            map(arr => arr.find(e => e.email === email))
        ).toPromise();

        if (!user) {
            throw new Error(`[auth/invalid-email]: ${email}`);
        }

        this.userId = user.id;
        localStorage.setItem(LOCAL_STORAGE_KEY, user.id);
    }

}
