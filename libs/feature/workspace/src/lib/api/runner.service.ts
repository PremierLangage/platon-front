import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RunnerProvider } from '../models/runner-provider';

@Injectable({ providedIn: 'root' })
export class RunnerService {
    constructor(private readonly provider: RunnerProvider) {}

    render(id: number): Observable<any> {
        return this.provider.render(id);
    }
}
