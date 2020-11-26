
import { InjectionToken, Type } from '@angular/core';
import { AuthUser } from './auth-user';

export interface AuthChange {
    user: AuthUser;
    type: 'connection' | 'disconnection';
}

export interface AuthObserver {
    onChangeAuth(change: AuthChange): void | Promise<void>;
}

export const AUTH_OBSERVER = new InjectionToken<Type<any>>('AUTH_OBSERVER');
