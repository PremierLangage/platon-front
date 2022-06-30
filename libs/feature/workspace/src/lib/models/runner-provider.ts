import { Observable } from 'rxjs';

export abstract class RunnerProvider {
    abstract render(id: number): Observable<any>;
}
