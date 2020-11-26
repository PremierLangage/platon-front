import { Provider } from '@angular/core';
import { AuthProvider } from './models/auth-provider';
import { AuthUserProvider } from './models/auth-user-provider';
import { InMemoryAuthProvider } from './services/in-memory-auth-provider';
import { InMemoryUserProvider } from './services/in-memory-user-provider';
import { RemoteAuthProvider } from './services/remote-auth-provider';
import { RemoteUserProvider } from './services/remote-user-provider';

export const CORE_AUTH_PROVIDERS: Provider[] = [
    { provide: AuthProvider, multi: true, useClass: RemoteAuthProvider },
    { provide: AuthProvider, multi: true, useClass: InMemoryAuthProvider },
    { provide: AuthUserProvider, multi: true, useClass: RemoteUserProvider },
    { provide: AuthUserProvider, multi: true, useClass: InMemoryUserProvider },
];
