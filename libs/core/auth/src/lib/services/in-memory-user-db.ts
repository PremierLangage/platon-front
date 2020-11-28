import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay, take } from 'rxjs/operators';
import { AuthUser } from '../models/auth-user';

@Injectable({ providedIn: 'root' })
export class InMemoryUserDb {
    private request?: Observable<AuthUser[]>;
    constructor(
        private readonly http: HttpClient,
    ) {}
    read(): Observable<AuthUser[]> {
        if (this.request) {
            return this.request;
        }
        return this.request = this.http.get<AuthUser[]>('assets/mocks/users.json').pipe(
            take(1),
            shareReplay(1)
        );
    }
}
