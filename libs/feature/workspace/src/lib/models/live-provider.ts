import { Observable } from 'rxjs';
import { LiveRender } from './live';

export abstract class LiveProvider {
    abstract render(id: number): Observable<LiveRender>;
}
