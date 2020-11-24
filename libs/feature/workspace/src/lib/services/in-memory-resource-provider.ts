import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Resource, ResourceStatus, ResourceTypes, Package, Circle } from '../models/resource';
import { ResourceProvider } from '../models/resource-provider';

const LOREM = `
Lorem ipsum dolor sit amet consectetur adipisicing elit.
Quam eveniet quo quia iusto dolores voluptatem esse qui officiis minima animi alias consequatur consectetur,
officia excepturi ducimus aliquid adipisci sunt numquam.
`;

@Injectable()
export class InMemoryResourceProvider extends ResourceProvider {
    private readonly packages = new BehaviorSubject<Package[]>([
        {
            id: 'package1',
            name: 'PLaTon Core',
            type: ResourceTypes.PACKAGE,
            status: ResourceStatus.READY,
            tags: ['PLaTon', 'Grader', 'Builder', 'Template', 'Component'],
            description: 'La librairie standard de la plateforme PLaTon.',
            date: 1605469210,
            admins: [],
            watchers: [],
            contributors: [],
            version: 1,
        },
    ]);

    private readonly circles = new BehaviorSubject<Circle[]>([
        {
            id: '0',
            name: 'AP1',
            type: ResourceTypes.CIRCLE,
            status: ResourceStatus.READY,
            tags: ['Informatique', 'Python', 'L1', 'UPEM'],
            description: LOREM,
            date: 1605469210,
            activityCount: 0,
            exerciseCount: 0,
            admins: [],
            watchers: [],
            contributors: [],
        },
        {
            id: '1',
            name: 'Calculus',
            type: ResourceTypes.CIRCLE,
            status: ResourceStatus.READY,
            tags: ['Mathématique', 'L1', 'UPEM'],
            description: LOREM,
            date: 1605469210,
            activityCount: 0,
            exerciseCount: 0,
            admins: [],
            watchers: [],
            contributors: [],
        },
        {
            id: '2',
            name: 'Automates',
            type: ResourceTypes.CIRCLE,
            status: ResourceStatus.READY,
             tags: [
                'Informatique',
                'Automate',
                'Analyse syntaxique',
                'L2',
                'UPEM'
            ],
            description: LOREM,
            date: 1605469210,
            activityCount: 0,
            exerciseCount: 0,
            admins: [],
            watchers: [],
            contributors: [],
        },
    ]);


    findById(type: ResourceTypes, id: string): Observable<Resource | undefined> {
        return this.packages.pipe(
            map(arr => arr.find(e => e.id === id))
        )
    }

    listOfType(type: ResourceTypes): Observable<Resource[]> {
        return this.packages.asObservable();
    }

}
