import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Circle } from '../models/circle';
import { CircleProvider } from '../models/circle-provider';

const LOREM = `
Lorem ipsum dolor sit amet consectetur adipisicing elit.
Quam eveniet quo quia iusto dolores voluptatem esse qui officiis minima animi alias consequatur consectetur,
officia excepturi ducimus aliquid adipisci sunt numquam.
`;

@Injectable()
export class MockCircleService extends CircleProvider {
    private readonly spaces = new BehaviorSubject<Circle[]>([
        {
            id: 'cc71e286-041e-493c-a870-b7c7c272b631',
            name: 'AP1',
            description: LOREM,
            tags: ['Informatique', 'Python', 'L1'],
        },
        {
            id: 'cc71e286-041e-493c-a870-b7c7c272b632',
            name: 'AP2',
            description: LOREM,
            tags: ['Informatique', 'Python', 'L1'],
        },
        {
            id: 'cc71e286-041e-493c-a870-b7c7c272b633',
            name: 'Automates',
            description: LOREM,
            tags: [
                'Informatique',
                'Automate',
                'Langages',
                'Analyse syntaxique',
                'L2',
            ],
        },
    ]);

    findById(id: string): Observable<Circle | undefined> {
        return this.spaces.pipe(
            map(arr => arr.find(e => e.id === id))
        )
    }

    listAll(): Observable<Circle[]> {
        return this.spaces.asObservable();
    }
}
