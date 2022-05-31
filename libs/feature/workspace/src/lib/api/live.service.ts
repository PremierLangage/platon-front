import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LiveRender } from '../models/live';
import { LiveProvider } from '../models/live-provider';

@Injectable({ providedIn: 'root' })
export class LiveService {
    constructor(private readonly provider: LiveProvider) {}

    render(id: number): Observable<LiveRender> {
        return this.provider.render(id);
    }
}
