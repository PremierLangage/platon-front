import {
    HttpErrorResponse,
    HttpHandler,
    HttpRequest,
} from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { throwError } from 'rxjs';
import { HttpErrorInterceptor } from './http-error-interceptor.service';
import { ServerError } from './server-error';

import Spy = jasmine.Spy;

describe('ErrorInterceptor', () => {
    let interceptor: HttpErrorInterceptor;
    let next: HttpHandler;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                { provide: HttpErrorInterceptor, useValue: new HttpErrorInterceptor() },
            ],
        });
        interceptor = TestBed.inject(HttpErrorInterceptor);
        next = jasmine.createSpyObj('next', ['handle']);
    });

    it('should be created', () => {
        expect(interceptor).toBeTruthy();
    });

    it('should intercept', () => {
        (next.handle as Spy).and.returnValue(
            throwError(
                new HttpErrorResponse({
                    status: 404,
                    error: JSON.stringify({
                        type: 'ItemNotFound',
                        message: 'message',
                    }),
                })
            )
        );
        const req = new HttpRequest('GET', 'apiUrl/path');
        interceptor.intercept(req, next).subscribe(
            () => fail('should return error'),
            (error) =>
                expect(error).toEqual(new ServerError('Error 404', 'message'))
        );
        expect(next.handle).toHaveBeenCalledWith(req);
    });
});
