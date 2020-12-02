import { Injectable } from '@angular/core';
import { ConfigService } from '@platon/shared/utils';
import { BehaviorSubject, Observable, of } from 'rxjs';
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
    ResourceFiltererArgs,
    ResourceFilterer,
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
                    status: 'READY',
                    tags: [],
                    description: LOREM,
                    date: 1605469210,
                    admins: [],
                    watchers: [],
                    contributors: [],
                    directoryId: '0',
                },
                {
                    id: '1',
                    name: 'Informatique',
                    type: 'CIRCLE',
                    status: 'READY',
                    tags: ['informatique'],
                    description: LOREM,
                    date: 1605469210,
                    admins: [],
                    watchers: [],
                    contributors: [],
                    directoryId: '0',
                    parentId: '0',
                },
                {
                    id: '2',
                    name: 'Python',
                    type: 'CIRCLE',
                    status: 'READY',
                    tags: ['informatique', 'python'],
                    description: LOREM,
                    date: 1605469210,
                    admins: [],
                    watchers: [],
                    contributors: [],
                    directoryId: '0',
                    parentId: '1',
                },
                {
                    id: '3',
                    name: 'AP1',
                    type: 'CIRCLE',
                    status: 'READY',
                    tags: ['informatique', 'python', 'ap1'],
                    description: LOREM,
                    date: 1605469210,
                    admins: [],
                    watchers: [],
                    contributors: [],
                    directoryId: '0',
                    parentId: '2',
                },
                {
                    id: '2',
                    name: 'C',
                    type: 'CIRCLE',
                    status: 'READY',
                    tags: ['informatique', 'c'],
                    description: LOREM,
                    date: 1605469210,
                    admins: [],
                    watchers: [],
                    contributors: [],
                    directoryId: '0',
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
                    date: 1605469210,
                    version: 1,
                    directoryId: '0',
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
                    directoryId: '0',
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
                    directoryId: '0',
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

    filterer<T extends Resource>(): ResourceFilterer<T> {
        return {
            filter: async (args: ResourceFiltererArgs) => {
                if (!args.query) {
                    return Promise.resolve({
                        matches: [],
                        completions: []
                    });
                }

                // tslint:disable-next-line: no-non-null-assertion
                const items = await this.resources.get(
                    args.filters.type
                )!.pipe(
                    take(1),
                ).toPromise();

                const fuse = new Fuse<T>(items, {
                    includeMatches: true,
                    findAllMatches: false,
                    threshold: 0.2,
                    keys: [...ResourceSearchIndexes]
                });

                const matches: T[] = [];
                const completions: string[] = [];

                fuse.search<T>(args.query).forEach(r => {
                    matches.push(r.item);
                    if (r.matches) {
                        r.matches.forEach(match => {
                            const value = match.value?.toLowerCase();
                            if (value && !completions.includes(value)) {
                                completions.push(value);
                            }
                        });
                    }
                });
                return Promise.resolve({
                    matches: this.filter(matches, args.filters),
                    completions
                });
            }
        }
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

    paginate<T extends Resource>(
        args: Required<ResourcePaginateArgs>
    ): Observable<ResourcePaginateResult<T>> {
        // tslint:disable-next-line: no-non-null-assertion
        return this.resources.get(args.filters.type)!.pipe(
            map((arr) => {
                arr = this.filter(arr, args.filters);
                const size = arr.length;
                const start = (args.page - 0) * args.pageSize;
                const end = start + args.pageSize;
                return {
                    page: arr.slice(start, end),
                    total: size,
                } as ResourcePaginateResult<T>;
            })
        );
    }

    private filter<T extends Resource>(items: T[], filter: ResourceFilters) {
        // TODO
        return items;
    }
}
