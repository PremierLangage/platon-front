import { Observable } from 'rxjs';
import { Circle } from './circle';

export abstract class CircleProvider {
    abstract findById(id: string): Observable<Circle | undefined>;
    abstract listAll(): Observable<Circle[]>;
}
