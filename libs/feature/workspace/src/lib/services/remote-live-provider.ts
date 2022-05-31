import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LiveRender } from '../models/live';
import { LiveProvider } from '../models/live-provider';

@Injectable()
export class RemoteLiveProvider extends LiveProvider {
    constructor(private readonly http: HttpClient) {
        super();
    }

    render(id: number): Observable<LiveRender> {
        return this.http.get<LiveRender>(`api/v1/runner/live/resource:${id}`);
    }
}
