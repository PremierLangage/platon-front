import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Circle } from '../models/circle';
import { CircleProvider } from '../models/circle-provider';

@Injectable({ providedIn: 'root' })
export class CircleService {
    constructor(
        private readonly provider: CircleProvider
    ) {}

    findById(id: string): Observable<Circle | undefined> {
        return this.provider.findById(id);
    }

    listAll(): Observable<Circle[]> {
        return  this.provider.listAll();
    }
}
