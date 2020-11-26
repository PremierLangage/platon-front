import { Injectable } from '@angular/core';
import { AuthProvider } from '../models/auth-provider';
import { ConfigService } from '@platon/shared/utils';

@Injectable()
export class InMemoryAuthProvider extends AuthProvider {
    constructor(
        private readonly config: ConfigService
    ) {
        super();
    }

    injectable(): boolean {
        return this.config.isDemo;
    }

    uid(): Promise<string | undefined> {
        return Promise.resolve('1');
    }

    signOut(): Promise<void> {
        throw new Error('Method not implemented.');
    }

    signInWithEmailAndPassword(email: string, password: string): Promise<void> {
        throw new Error('Method not implemented.');
    }
}
