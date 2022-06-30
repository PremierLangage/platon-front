import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RunnerProvider } from '../models/runner-provider';

@Injectable()
export class RemoteRunnerProvider extends RunnerProvider {
    constructor(private readonly http: HttpClient) {
        super();
    }

    render(id: number): Observable<any> {
        return this.http.get<any>(`/api/v1/runner/${id}`);
    }
}
