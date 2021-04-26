import { HTTP_INTERCEPTORS, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Injectable, Provider } from '@angular/core';
import {
    HttpHandler,
    HttpRequest,
    HttpInterceptor,
} from '@angular/common/http';

import { BehaviorSubject, from, Observable, throwError } from 'rxjs';
import { catchError, filter, finalize, switchMap, take } from 'rxjs/operators';

import { TokenService } from '../services/token.service';
import { AuthToken } from '../models/auth-token';


/**
 * Intercepts http request to add Authorization header with logged user json web token.
 */
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    private isRefreshing = false;
    private readonly token$ = new BehaviorSubject<AuthToken | undefined> (undefined);

    constructor(
        private readonly tokenService: TokenService
    ) { }

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        return from(this.tokenService.token()).pipe(
            switchMap(token => {
                if (token != null) {
                    return next.handle(this.addAuthorization(req, token)).pipe(
                        catchError<any, any>(err => {
                            if (err?.error?.code === 'token_not_valid') {
                                return this.refreshToken(req, next);
                            }

                            return throwError(err);
                        })
                    );
                }

                return next.handle(req);
            })
        )
    }

    private refreshToken(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        if (!this.isRefreshing) {
            this.isRefreshing = true;

            // future requests will wait until the refresh token is resolved
            this.token$.next(undefined);

            return from(this.tokenService.refresh()).pipe(
                switchMap(token => {
                    return next.handle(this.addAuthorization(req, token));
                }),
                finalize(() => this.isRefreshing = false)
            );
        }

        return this.token$.pipe(
            filter(token => token != null),
            take(1),
            switchMap(token => {
                return next.handle(this.addAuthorization(req, token!));
            })
        );
    }

    private addAuthorization(
        req: HttpRequest<any>,
        token: AuthToken
    ): HttpRequest<any> {
        return  req.clone({
            headers: req.headers.set('Authorization', 'Bearer ' + token.access),
        });
    }

}


export const AuthInterceptorProvider: Provider = {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
};
