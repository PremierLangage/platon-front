import { Injectable } from '@angular/core';
import { ConfigService } from '@platon/shared/utils';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, take } from 'rxjs/operators';
import Fuse from 'fuse.js';

import {
    Resource,
    ResourceStatus,
    ResourceTypes,
    Package,
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
                    name: 'AP1',
                    type: 'CIRCLE',
                    status: 'READY',
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
                    type: 'CIRCLE',
                    status: 'READY',
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
                    type: 'CIRCLE',
                    status: 'READY',
                    tags: [
                        'Informatique',
                        'Automate',
                        'Analyse syntaxique',
                        'L2',
                        'UPEM',
                    ],
                    description: LOREM,
                    date: 1605469210,
                    activityCount: 0,
                    exerciseCount: 0,
                    admins: [],
                    watchers: [],
                    contributors: [],
                },
            ]),
        ],
        [
            'PACKAGE',
            new BehaviorSubject<Package[]>([
                {
                    id: '0',
                    name: 'PLaTon Core',
                    type: 'PACKAGE',
                    status: 'READY',
                    tags: [
                        'PLaTon',
                        'Grader',
                        'Builder',
                        'Template',
                        'Component',
                    ],
                    description:
                        'La librairie standard de la plateforme PLaTon.',
                    date: 1605469210,
                    admins: [],
                    watchers: [],
                    contributors: [],
                    version: 1,
                },
            ]),
        ],
        ['EXERCISE', new BehaviorSubject<Exercise[]>([
            {
                id: '0',
                circleId: '0',
                name: 'Exercice 1',
                type: 'EXERCISE',
                status: 'READY',
                tags: [
                    'PLaTon',
                    'Grader',
                    'Builder',
                    'Template',
                    'Component',
                ],
                description: LOREM,
                date: 1605469210,
                admins: [],
                watchers: [],
                contributors: [],
                version: 1,
            },
        ])],
        ['ACTIVITY', new BehaviorSubject<Activity[]>([
            {
                id: '0',
                circleId: '0',
                name: 'Activité 1',
                type: 'ACTIVITY',
                status: 'READY',
                tags: [
                    'PLaTon',
                    'Grader',
                    'Builder',
                    'Template',
                    'Component',
                ],
                description: LOREM,
                date: 1605469210,
                admins: [],
                watchers: [],
                contributors: [],
                version: 1,
            },
        ])],
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
                            if (match.value && !completions.includes(match.value)) {
                                completions.push(match.value);
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
