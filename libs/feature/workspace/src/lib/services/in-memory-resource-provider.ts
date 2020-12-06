import { Injectable } from '@angular/core';
import { ConfigService } from '@platon/shared/utils';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { delay, map, take} from 'rxjs/operators';
import Fuse from 'fuse.js';
import { AuthChange, AuthObserver, InMemoryUserDb } from '@platon/core/auth';
import {
    Resource,
    ResourceTypes,
    Circle,
    Exercise,
    Activity,
    ResourceSearchIndexes,
    PublishableResource,
    ResourceContributor,
    ResourceEvent,
} from '../models/resource';
import {
    ResourceFilters,
    ResourceFindByIdArgs,
    ResourceListEventsArgs,
    ResourcePaginateArgs,
    ResourcePaginateResult,
    ResourceProvider,
} from '../models/resource-provider';
import { array_sample } from '@platon/shared/utils';
const LOREM = `
Lorem ipsum dolor sit amet consectetur adipisicing elit.
Quam eveniet quo quia iusto dolores voluptatem esse qui officiis minima animi alias consequatur consectetur,
officia excepturi ducimus aliquid adipisci sunt numquam.
`;

@Injectable()
export class InMemoryResourceProvider extends ResourceProvider implements AuthObserver {
    private readonly events = new Map<ResourceTypes, BehaviorSubject<ResourceEvent[]>>([
        ['CIRCLE', new BehaviorSubject<ResourceEvent[]>([])],
        ['EXERCISE', new BehaviorSubject<ResourceEvent[]>([])],
        ['ACTIVITY', new BehaviorSubject<ResourceEvent[]>([])],
    ]);
    private readonly resources = new Map<ResourceTypes, BehaviorSubject<any[]>>([
        [
            'CIRCLE',
            new BehaviorSubject<Circle[]>([
                {
                    id: 0,
                    name: 'PLaTon',
                    type: 'CIRCLE',
                    tags: [],
                    description: LOREM,
                    date: 1599138760,
                    directoryId: '0',
                },
                {
                    id: 1,
                    name: 'Informatique',
                    type: 'CIRCLE',
                    tags: ['informatique'],
                    description: LOREM,
                    date: 1599138760,
                    directoryId: '1',
                    parentId: 0,
                },
                {
                    id: 2,
                    name: 'Python',
                    type: 'CIRCLE',
                    tags: ['informatique', 'python'],
                    description: LOREM,
                    date: 1599397960,
                    directoryId: '2',
                    parentId: 1,
                },
                {
                    id: 3,
                    name: 'AP1',
                    type: 'CIRCLE',
                    tags: ['informatique', 'python', 'ap1'],
                    description: LOREM,
                    date: 1604469210,
                    directoryId: '3',
                    parentId: 2,
                },
                {
                    id: 4,
                    name: 'C',
                    type: 'CIRCLE',
                    tags: ['informatique', 'c'],
                    description: LOREM,
                    date: 1599397960,
                    directoryId: '4',
                    parentId: 1,
                },
            ]),
        ],
        [
            'EXERCISE',
            new BehaviorSubject<Exercise[]>([
                {
                    id: 0,
                    circleId: 0,
                    name: 'Boucle for',
                    type: 'EXERCISE',
                    status: 'READY',
                    tags: ['informatique', 'python', 'boucles'],
                    description: LOREM,
                    date: 1602469210,
                    version: 1,
                    directoryId: '5',
                },
                {
                    id: 0,
                    version: 1,
                    circleId: 0,
                    directoryId: '6',
                    name: 'Boucle while',
                    type: 'EXERCISE',
                    status: 'READY',
                    tags: ['informatique', 'python', 'boucles'],
                    description: LOREM,
                    date: 1605469210,
                },
            ])
        ],
        [
            'ACTIVITY',
            new BehaviorSubject<Activity[]>([
                {
                    id: 0,
                    version: 1,
                    circleId: 0,
                    directoryId: '7',
                    name: 'Activité 1',
                    type: 'ACTIVITY',
                    status: 'READY',
                    tags: ['informatique', 'python', 'boucles'],
                    description: LOREM,
                    date: 1605469210,
                },
            ])
        ],
    ]);

    private readonly contributors = new Map<number, BehaviorSubject<ResourceContributor[]>>([]);

    constructor(
        private readonly config: ConfigService,
        private readonly inMemoryUserDb: InMemoryUserDb,
    ) {
        super();
    }

    injectable(): boolean {
        return !this.config.isServerRunning;
    }

    async onChangeAuth(change: AuthChange) {
        if (!this.injectable()) {
            return; // perf does not create cache in production mode
        }

        if (change.type === 'connection') {
            const teachers = await this.inMemoryUserDb.read().pipe(
                map(arr => arr.filter(e => e.role === 'Teacher'))
            ).toPromise();
            return this.getResources().pipe(
                map(resources => {
                    const circles = resources.filter(e => e.type === 'CIRCLE');
                    circles.forEach(circle => {
                        const contributors: ResourceContributor[] = [];
                        array_sample(teachers, 3).forEach(teacher => {
                            if (!teacher.isAdmin) {
                                contributors.push({
                                    id: teacher.id,
                                    circleId: circle.id,
                                    isAdmin: teacher.isAdmin,
                                    firstName: teacher.firstName,
                                    lastName: teacher.lastName,
                                    userName: teacher.userName,
                                    isPending: false,
                                });
                            }
                        });
                        teachers.forEach(u => {
                            if (u.isAdmin) {
                                contributors.push({
                                    id: u.id,
                                    circleId: circle.id,
                                    isAdmin: u.isAdmin,
                                    firstName: u.firstName,
                                    lastName: u.lastName,
                                    userName: u.userName,
                                    isPending: false
                                });
                            }
                        });
                        this.contributors.set(circle.id, new BehaviorSubject(contributors));
                    });
                })
            ).toPromise();
        }
    }

    suggestions(): Observable<Record<ResourceTypes, string[]>> {
        return this.getResources().pipe(
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
                map((arr) => arr.find((e) => e.id === args.id)),
                take(1)
            ) as Observable<T | undefined>;
    }

    update(resource: Resource): Promise<void> {
        const subject = this.resources.get(resource.type) as BehaviorSubject<Resource[]>;
        subject.value.forEach((r, i) => {
            if (r.id === resource.id) {
                subject.value[i] = resource;
                subject.next(subject.value);
                return true;
            }
        });
        return Promise.resolve();
    }

    paginate(
        args: Required<ResourcePaginateArgs>
    ): Observable<ResourcePaginateResult> {
        return this.getResources().pipe(
            map(resources => {
                resources = this.filter(resources, args.filters);
                const size = resources.length;
                const start = (args.page - 0) * args.pageSize;
                const end = start + args.pageSize;
                return {
                    page: resources.slice(start, end),
                    total: size,
                } as ResourcePaginateResult;
            }),
            delay(500) // simulate latency
        )
    }


    addEvent(event: ResourceEvent): Promise<void> {
        const events = this.events.get(event.resourceType) as BehaviorSubject<ResourceEvent[]>;
        events.value.push(event);
        events.next(events.value);
        return Promise.resolve();
    }
    removeEvent(event: ResourceEvent): Promise<void> {
        const events = this.events.get(event.resourceType) as BehaviorSubject<ResourceEvent[]>;
        events.next(events.value.filter(e => e.id !== event.id));
        return Promise.resolve();
    }
    listEvents(
        args: ResourceListEventsArgs
    ): Observable<ResourceEvent[]> {
        return this.getEvents().pipe(
            map((events) =>
                events.filter(
                    (event) =>
                        event.resourceType === args.resourceType &&
                        event.resourceId === args.resourceId
                )
            )
        );
    }

    addContributor(contributor: ResourceContributor): Promise<void> {
        const contributors = this.getContributors(contributor.circleId);
        contributors.value.push(contributor);
        contributors.next(contributors.value);
        return Promise.resolve();
    }
    updateContributor(contributor: ResourceContributor): Promise<void> {
        const contributors = this.getContributors(contributor.circleId);
        contributors.value.forEach((e, i) => {
            if (e.id === contributor.id) {
                contributors.value[i] = contributor;
                return true;
            }
        });
        contributors.next(contributors.value);
        return Promise.resolve();
    }
    removeContributor(contributor: ResourceContributor): Promise<void> {
        const contributors = this.getContributors(contributor.circleId);
        contributors.next(contributors.value.filter(e => e.id !== contributor.id));
        return Promise.resolve();
    }
    listContributors(
        circleId: number
    ): Observable<ResourceContributor[]> {
        return this.getContributors(circleId).asObservable();
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
            if (item.type !== 'CIRCLE') {
                const { status, circleId } = (item as PublishableResource);
                matches.push(filters.status === 'ALL' || filters.status === status);
                matches.push(!filters.circleId || filters.circleId === circleId);
            }
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


    private getEvents() {
        const queries: Observable<ResourceEvent[]>[] = [];
        this.events.forEach((subject) => {
            queries.push(subject.asObservable());
        });
        return combineLatest(queries).pipe(
            map(events => {
                let response: ResourceEvent[] = [];
                events.forEach(array => {
                    response = response.concat(array);
                });
                return response;
            })
        );
    }

    private getResources() {
        const queries: Observable<Resource[]>[] = [];
        this.resources.forEach((subject) => {
            queries.push(subject.asObservable());
        });
        return combineLatest(queries).pipe(
            map(resources => {
                let response: Resource[] = [];
                resources.forEach(array => {
                    response = response.concat(array);
                });
                return response;
            })
        );
    }

    private getContributors(circleId: number) {
        let contributors = this.contributors.get(circleId);
        if (!contributors) {
            contributors = new BehaviorSubject<ResourceContributor[]>([]);
            this.contributors.set(circleId, contributors);
        }
        return contributors;
    }

}
