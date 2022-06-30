import { Observable } from 'rxjs';
import { Publisher, PublisherForm } from './publisher';

export abstract class PublisherProvider {
    abstract get(): Observable<Publisher>;
    abstract publish(form: PublisherForm): Observable<Publisher>;
}
