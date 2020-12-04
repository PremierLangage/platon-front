import { Injectable } from '@angular/core';
import { ConfigService } from '@platon/shared/utils';
import { BehaviorSubject, combineLatest, Observable, of } from 'rxjs';
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
    SharedResource,
    Contributor,
    CircleEvent,
    ContributorRequest,
} from '../models/resource';
import {
    ResourceFilters,
    ResourceFindByIdArgs,
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
    private readonly resources = new Map<ResourceTypes, BehaviorSubject<any[]>>([
        [
            'CIRCLE',
            new BehaviorSubject<Circle[]>([
                {
                    id: '0',
                    name: 'PLaTon',
                    type: 'CIRCLE',
                    tags: [],
                    description: LOREM,
                    date: 1599138760,
                    directoryId: '0',
                },
                {
                    id: '1',
                    name: 'Informatique',
                    type: 'CIRCLE',
                    tags: ['informatique'],
                    description: LOREM,
                    date: 1599138760,
                    directoryId: '1',
                    parentId: '0',
                },
                {
                    id: '2',
                    name: 'Python',
                    type: 'CIRCLE',
                    tags: ['informatique', 'python'],
                    description: LOREM,
                    date: 1599397960,
                    directoryId: '2',
                    parentId: '1',
                },
                {
                    id: '3',
                    name: 'AP1',
                    type: 'CIRCLE',
                    tags: ['informatique', 'python', 'ap1'],
                    description: LOREM,
                    date: 1604469210,
                    directoryId: '3',
                    parentId: '2',
                },
                {
                    id: '2',
                    name: 'C',
                    type: 'CIRCLE',
                    tags: ['informatique', 'c'],
                    description: LOREM,
                    date: 1599397960,
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
                    tags: ['informatique', 'python', 'boucles'],
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
                    tags: ['informatique', 'python', 'boucles'],
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

    private readonly events = new Map<string, BehaviorSubject<CircleEvent[]>>([]);
    private readonly requests = new Map<string, BehaviorSubject<ContributorRequest[]>>([]);
    private readonly contributors = new Map<string, BehaviorSubject<Contributor[]>>([]);

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
                        const contributors: Contributor[] = [];
                        array_sample(teachers, 3).forEach(teacher => {
                            if (!teacher.isAdmin) {
                                contributors.push({
                                    id: teacher.id,
                                    isAdmin: teacher.isAdmin,
                                    firstName: teacher.firstName,
                                    lastName: teacher.lastName,
                                    userName: teacher.userName
                                });
                            }
                        });
                        teachers.forEach(u => {
                            if (u.isAdmin) {
                                contributors.push({
                                    id: u.id,
                                    isAdmin: u.isAdmin,
                                    firstName: u.firstName,
                                    lastName: u.lastName,
                                    userName: u.userName
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


    listContributors(
        circleId: string
    ): Observable<Contributor[]> {
        return this.getContributors(circleId).asObservable();
    }

    addContributor(circleId: string, contributor: Contributor): Promise<void> {
        const contributors = this.getContributors(circleId);
        contributors.value.push(contributor);
        contributors.next(contributors.value);
        return Promise.resolve();
    }

    removeContributor(circleId: string, contributor: Contributor): Promise<void> {
        const contributors = this.getContributors(circleId);
        contributors.next(contributors.value.filter(e => e.id !== contributor.id));
        return Promise.resolve();
    }

    listEvents(
        circleId: string
    ): Observable<CircleEvent[]> {
        return this.getEvents(circleId).asObservable();
    }

    addEvent(circleId: string, event: CircleEvent): Promise<void> {
        const events = this.getEvents(circleId);
        events.value.push(event);
        events.next(events.value);
        return Promise.resolve();
    }

    removeEvent(circleId: string, event: CircleEvent): Promise<void> {
        const events = this.getEvents(circleId);
        events.next(events.value.filter(e => e.id !== event.id));
        return Promise.resolve();
    }

    listRequests(
        circleId: string
    ): Observable<ContributorRequest[]> {
        return this.getRequests(circleId).asObservable();
    }

    addRequest(circleId: string, request: ContributorRequest): Promise<void> {
        const requests = this.getRequests(circleId);
        requests.value.push(request);
        requests.next(requests.value);
        return Promise.resolve();
    }

    removeRequest(circleId: string, request: ContributorRequest): Promise<void> {
        const requests = this.getRequests(circleId);
        requests.next(requests.value.filter(e => e.id !== request.id));
        return Promise.resolve();
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
                const { status, circleId } = (item as SharedResource);
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

    private getEvents(circleId: string) {
        let events = this.events.get(circleId);
        if (!events) {
            events = new BehaviorSubject<CircleEvent[]>([]);
            this.events.set(circleId, events);
        }
        return events;
    }

    private getRequests(circleId: string) {
        let requests = this.requests.get(circleId);
        if (!requests) {
            requests = new BehaviorSubject<ContributorRequest[]>([]);
            this.requests.set(circleId, requests);
        }
        return requests;
    }

    private getContributors(circleId: string) {
        let contributors = this.contributors.get(circleId);
        if (!contributors) {
            contributors = new BehaviorSubject<Contributor[]>([]);
            this.contributors.set(circleId, contributors);
        }
        return contributors;
    }

    private getResources() {
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
