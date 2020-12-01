import { Injectable } from '@angular/core';
import { AuthProvider } from '../models/auth-provider';
import { ConfigService } from '@platon/shared/utils';

@Injectable()
export class RemoteAuthProvider extends AuthProvider {
    constructor(
        private readonly config: ConfigService
    ) {
        super();
    }

    injectable(): boolean {
        return this.config.isServerRunning;
    }

    uid(): Promise<number | undefined> {
        throw new Error('Method not implemented.');
    }
    signOut(): Promise<void> {
        throw new Error('Method not implemented.');
    }

    signInWithEmailAndPassword(email: string, password: string): Promise<void> {
        throw new Error('Method not implemented.');
    }
}
