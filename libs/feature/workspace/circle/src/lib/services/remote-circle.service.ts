import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Circle } from '../models/circle';
import { CircleProvider } from '../models/circle-provider';

@Injectable()
export class RemoteCircleService extends CircleProvider {
    findById(id: string): Observable<Circle | undefined> {
        throw new Error('Method not implemented.');
    }
    listAll(): Observable<Circle[]> {
        throw new Error('Method not implemented.');
    }
}
