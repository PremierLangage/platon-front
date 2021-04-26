import { Provider } from '@angular/core';
import { AuthProvider } from './models/auth-provider';
import { AuthUserProvider } from './models/auth-user-provider';
import { RemoteAuthProvider } from './services/remote-auth-provider';
import { RemoteUserProvider } from './services/remote-user-provider';
import { AuthInterceptorProvider } from './interceptors/auth.interceptor';

export const AUTH_PROVIDERS: Provider[] = [
    AuthInterceptorProvider,
    { provide: AuthProvider, useClass: RemoteAuthProvider },
    { provide: AuthUserProvider, useClass: RemoteUserProvider },
];
