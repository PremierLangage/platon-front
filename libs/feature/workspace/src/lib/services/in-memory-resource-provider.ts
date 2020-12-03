import { Injectable } from '@angular/core';
import { ConfigService } from '@platon/shared/utils';
import { BehaviorSubject, combineLatest, Observable, of } from 'rxjs';
import { map, take } from 'rxjs/operators';
import Fuse from 'fuse.js';

import {
    Resource,
    ResourceTypes,
    Circle,
    Exercise,
    Activity,
    ResourceSearchIndexes,
} from '../models/resource';
import {
    ResourceFilters,
    ResourceFindByIdArgs,
    ResourcePaginateArgs,
    ResourcePaginateResult,
    ResourceProvider,
} from '../models/resource-provider';

const LOREM = `
Lorem ipsum dolor sit amet consectetur adipisicing elit.
Quam eveniet quo quia iusto dolores voluptatem esse qui officiis minima animi alias consequatur consectetur,
officia excepturi ducimus aliquid adipisci sunt numquam.
`;

@Injectable()
export class InMemoryResourceProvider extends ResourceProvider {
    private readonly resources = new Map<ResourceTypes, BehaviorSubject<any[]>>([
        [
            'CIRCLE',
            new BehaviorSubject<Circle[]>([
                {
                    id: '0',
                    name: 'PLaTon',
                    type: 'CIRCLE',
                    tags: ['platon'],
                    description: LOREM,
                    date: 1599138760,
                    admins: [],
                    requests: [],
                    watchers: [],
                    contributors: [],
                    directoryId: '0',
                },
                {
                    id: '1',
                    name: 'Informatique',
                    type: 'CIRCLE',
                    tags: ['platon', 'informatique'],
                    description: LOREM,
                    date: 1599138760,
                    admins: [],
                    requests: [],
                    watchers: [],
                    contributors: [],
                    directoryId: '1',
                    parentId: '0',
                },
                {
                    id: '2',
                    name: 'Python',
                    type: 'CIRCLE',
                    tags: ['platon', 'informatique', 'python'],
                    description: LOREM,
                    date: 1599397960,
                    admins: [],
                    requests: [],
                    watchers: [],
                    contributors: [],
                    directoryId: '2',
                    parentId: '1',
                },
                {
                    id: '3',
                    name: 'AP1',
                    type: 'CIRCLE',
                    tags: ['platon', 'informatique', 'python', 'ap1'],
                    description: LOREM,
                    date: 1604469210,
                    admins: [],
                    requests: [],
                    watchers: [],
                    contributors: [],
                    directoryId: '3',
                    parentId: '2',
                },
                {
                    id: '2',
                    name: 'C',
                    type: 'CIRCLE',
                    tags: ['platon', 'informatique', 'c'],
                    description: LOREM,
                    date: 1599397960,
                    admins: [],
                    requests: [],
                    watchers: [],
                    contributors: [],
                    directoryId: '4',
                    parentId: '1',
                },
            ]),
        ],
        [
            'EXERCISE',
            new BehaviorSubject<Exercise[]>([
                {
                    id: '0',
                    circleId: '0',
                    name: 'Boucle for',
                    type: 'EXERCISE',
                    status: 'READY',
                    tags: ['informatique', 'python', 'boucles', 'for'],
                    description: LOREM,
                    date: 1602469210,
                    version: 1,
                    directoryId: '5',
                },
                {
                    id: '0',
                    circleId: '0',
                    name: 'Boucle while',
                    type: 'EXERCISE',
                    status: 'READY',
                    tags: ['informatique', 'python', 'boucles', 'while'],
                    description: LOREM,
                    date: 1605469210,
                    version: 1,
                    directoryId: '6',
                },
            ])
        ],
        [
            'ACTIVITY',
            new BehaviorSubject<Activity[]>([
                {
                    id: '0',
                    circleId: '0',
                    name: 'Activité 1',
                    type: 'ACTIVITY',
                    status: 'READY',
                    tags: ['informatique', 'python', 'boucles'],
                    description: LOREM,
                    date: 1605469210,
                    version: 1,
                    directoryId: '7',
                },
            ])
        ],
    ]);

    constructor(
        private readonly config: ConfigService
    ) {
        super();
    }

    injectable(): boolean {
        return !this.config.isServerRunning;
    }

    suggestions(): Observable<Record<ResourceTypes, string[]>> {
        return this.combineResources().pipe(
            map(resources => {
                const suggestions: Record<ResourceTypes, string[]> = {
                    CIRCLE: [],
                    EXERCISE: [],
                    ACTIVITY: []
                };
                resources.forEach(resource => {
                    const array = suggestions[resource.type];
                    resource.tags.forEach(tag => {
                        if (!array.includes(tag)) {
                            array.push(tag);
                        }
                    });
                });
                return suggestions;
            })
        );
    }

    findById<T extends Resource>(
        args: ResourceFindByIdArgs
    ): Observable<T | undefined> {
        // tslint:disable-next-line: no-non-null-assertion
        return this.resources
            .get(args.type)!
            .pipe(
                map((arr) => arr.find((e) => e.id === args.id))
            ) as Observable<T | undefined>;
    }

    paginate(
        args: Required<ResourcePaginateArgs>
    ): Observable<ResourcePaginateResult> {
        return this.combineResources().pipe(
            map(resources => {
                resources = this.filter(resources, args.filters);
                const size = resources.length;
                const start = (args.page - 0) * args.pageSize;
                const end = start + args.pageSize;
                return {
                    page: resources.slice(start, end),
                    total: size,
                } as ResourcePaginateResult;
            })
        )
    }

    private days(a: Date, b: Date) {
        // To calculate the time difference of two dates
        const diffInTime = b.getTime() - a.getTime();
        // To calculate the no. of days between two dates
        return  diffInTime / (1000 * 3600 * 24);
    }

    private filter(items: Resource[], filters: ResourceFilters) {
        const now = new Date();
        items = items.filter(item => {
            const past = new Date(item.date * 1000);
            const matches: boolean[] = [];
            matches.push(filters.types.includes(item.type));
            matches.push((
                item.type === 'CIRCLE' ||
                filters.status === 'ALL' ||
                filters.status === (item as any).status
            ));
            matches.push(filters.date === 0 || this.days(past, now) < filters.date);
            return matches.every(match => !!match);
        });

        if (filters.query) {
            const fuse = new Fuse<Resource>(items, {
                includeMatches: true,
                findAllMatches: false,
                threshold: 0.2,
                keys: [...ResourceSearchIndexes]
            });
            items = [];
            fuse.search(filters.query).forEach(match => {
                items.push(match.item);
            });
        }

        return items.sort((a, b) => {
            if (filters.sortBy === 'name') {
                return a.name.localeCompare(b.name);
            }
            return b.date - a.date;
        });
    }

    private combineResources() {
        const queries: Observable<Resource[]>[] = [];
        this.resources.forEach((subject) => {
            queries.push(subject.asObservable());
        });

        return combineLatest(queries).pipe(
            map(combinedResources => {
                let resources: Resource[] = [];
                combinedResources.forEach(array => {
                    resources = resources.concat(array);
                });
                return resources;
            })
        );
    }

}
