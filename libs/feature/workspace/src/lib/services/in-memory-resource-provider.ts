import { Injectable } from '@angular/core';
import {
    AuthChange,
    AuthObserver,
    AuthUser,
    InMemoryUserDb
} from '@platon/core/auth';
import { array_sample } from '@platon/shared/utils';
import Fuse from 'fuse.js';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { delay, map, take } from 'rxjs/operators';
import {
    Activity,
    Circle,
    Exercise,
    Member,
    PublishableResource,
    Resource,
    ResourceEvent,

    ResourceTypes,
    RESOURCE_LABELS, RESOURCE_SEARCH_INDEXES
} from '../models/resource';
import {
    ResourceFilters,
    ResourceFindByIdArgs,
    ResourceFormCreateCircle,
    ResourceListEventsArgs,
    ResourcePaginateArgs,
    ResourcePaginateResult,
    ResourceProvider
} from '../models/resource-provider';

const LOREM = `
Lorem ipsum dolor sit amet consectetur adipisicing elit.
Quam eveniet quo quia iusto dolores voluptatem esse qui officiis minima animi alias consequatur consectetur,
officia excepturi ducimus aliquid adipisci sunt numquam.
`;

@Injectable()
export class InMemoryResourceProvider extends ResourceProvider
    implements AuthObserver {
    private readonly events = new Map<
        ResourceTypes,
        BehaviorSubject<ResourceEvent[]>
    >([
        ['CIRCLE', new BehaviorSubject<ResourceEvent[]>([])],
        ['EXERCISE', new BehaviorSubject<ResourceEvent[]>([])],
        ['ACTIVITY', new BehaviorSubject<ResourceEvent[]>([])],
    ]);
    private readonly members = new Map<number, BehaviorSubject<Member[]>>([]);

    private readonly resources = new Map<ResourceTypes, BehaviorSubject<any[]>>(
        [
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
                        directoryId: 0,
                        forumId: 1,
                    },
                    {
                        id: 1,
                        name: 'Informatique',
                        type: 'CIRCLE',
                        tags: ['informatique'],
                        description: LOREM,
                        date: 1599138760,
                        directoryId: 0,
                        forumId: 2,
                        parent: {
                            id: 0,
                            name: 'PLaTon',
                        },
                    },
                    {
                        id: 2,
                        name: 'Python',
                        type: 'CIRCLE',
                        tags: ['informatique', 'python'],
                        description: LOREM,
                        date: 1599397960,
                        directoryId: 2,
                        forumId: 3,
                        parent: {
                            id: 1,
                            name: 'Informatique',
                        },
                    },
                    {
                        id: 3,
                        name: 'AP1',
                        type: 'CIRCLE',
                        tags: ['informatique', 'python', 'ap1'],
                        description: LOREM,
                        date: 1604469210,
                        directoryId: 3,
                        forumId: 4,
                        parent: {
                            id: 2,
                            name: 'Python',
                        },
                    },
                    {
                        id: 4,
                        name: 'C',
                        type: 'CIRCLE',
                        tags: ['informatique', 'c'],
                        description: LOREM,
                        date: 1599397960,
                        directoryId: 4,
                        forumId: 5,
                        parent: {
                            id: 1,
                            name: 'Informatique',
                        },
                    },
                ]),
            ],
            [
                'EXERCISE',
                new BehaviorSubject<Exercise[]>([
                    {
                        id: 0,
                        circle: {
                            id: 2,
                            name: 'Python',
                        },
                        directoryId: 5,
                        version: 1,
                        forumId: 6,
                        date: 1602469210,
                        name: 'Boucle for',
                        type: 'EXERCISE',
                        status: 'READY',
                        tags: ['informatique', 'python', 'boucles'],
                        description: LOREM,
                    },
                    {
                        id: 1,
                        version: 1,
                        circle: {
                            id: 2,
                            name: 'Python',
                        },
                        directoryId: 6,
                        forumId: 7,
                        date: 1605469210,
                        name: 'Boucle while',
                        type: 'EXERCISE',
                        status: 'READY',
                        tags: ['informatique', 'python', 'boucles'],
                        description: LOREM,
                    },
                ]),
            ],
            [
                'ACTIVITY',
                new BehaviorSubject<Activity[]>([
                    {
                        id: 0,
                        version: 1,
                        circle: {
                            id: 2,
                            name: 'Python',
                        },
                        directoryId: 7,
                        forumId: 8,
                        name: 'Activité 1',
                        type: 'ACTIVITY',
                        status: 'READY',
                        tags: ['informatique', 'python', 'boucles'],
                        description: LOREM,
                        date: 1605469210,
                    },
                ]),
            ],
        ]
    );

    private loggedUser?: AuthUser;

    constructor(
        private readonly inMemoryUserDb: InMemoryUserDb
    ) {
        super();
    }

    async onChangeAuth(change: AuthChange) {
        this.loggedUser = undefined;
        if (change.type === 'connection') {
            this.loggedUser = change.user;
            const teachers = await this.inMemoryUserDb
                .read()
                .pipe(map((arr) => arr.filter((e) => e.role === 'Teacher')))
                .toPromise();
            return this.getResources()
                .pipe(
                    map((resources) => {
                        const circles = resources.filter(
                            (e) => e.type === 'CIRCLE'
                        );
                        circles.forEach((circle) => {
                            const members: Member[] = [];
                            array_sample(teachers, 3).forEach((teacher) => {
                                if (!teacher.isAdmin) {
                                    members.push({
                                        id: teacher.id,
                                        circleId: circle.id,
                                        picture: teacher.picture,
                                        userName: teacher.userName,
                                        lastName: teacher.lastName,
                                        firstName: teacher.firstName,
                                        isAdmin: teacher.isAdmin,
                                    });
                                }
                            });
                            teachers.forEach((u) => {
                                if (u.isAdmin) {
                                    members.push({
                                        id: u.id,
                                        circleId: circle.id,
                                        picture: u.picture,
                                        userName: u.userName,
                                        lastName: u.lastName,
                                        firstName: u.firstName,
                                        isAdmin: u.isAdmin,
                                    });
                                }
                            });
                            this.members.set(
                                circle.id,
                                new BehaviorSubject(members)
                            );
                        });
                    })
                )
                .toPromise();
        }
    }

    suggestions(): Observable<Record<ResourceTypes, string[]>> {
        return this.getResources().pipe(
            map((resources) => {
                const suggestions: Record<ResourceTypes, string[]> = {
                    CIRCLE: [],
                    EXERCISE: [],
                    ACTIVITY: [],
                };
                resources.forEach((resource) => {
                    const array = suggestions[resource.type];
                    resource.tags.forEach((tag) => {
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
        return this.resources.get(args.type)!.pipe(
            map((arr) => arr.find((e) => e.id === args.id)),
            take(1)
        ) as Observable<T | undefined>;
    }

    async createCircle(form: ResourceFormCreateCircle): Promise<Circle> {
        const all = this.resources.get('CIRCLE') as BehaviorSubject<Circle[]>;
        const last = all.value[all.value.length - 1];
        const circle: Circle = {
            id: all.value.length,
            name: form.name,
            type: 'CIRCLE',
            tags: form.tags,
            description: form.description,
            date: new Date().getTime() / 1000,
            directoryId: last.directoryId + 1,
            forumId: last.forumId + 1,
        };

        all.value.push(circle);

        all.next(all.value);
        const teachers = await this.inMemoryUserDb
            .read()
            .pipe(map((arr) => arr.filter((e) => e.role === 'Teacher')))
            .toPromise();

        const members: Member[] = [];
        form.members.forEach(m => {
            m.circleId = circle.id;
            if (!m.isAdmin) {
                members.push(m);
            }
        });
        teachers.forEach((u) => {
            if (u.isAdmin) {
                members.push({
                    id: u.id,
                    circleId: circle.id,
                    picture: u.picture,
                    userName: u.userName,
                    lastName: u.lastName,
                    firstName: u.firstName,
                    isAdmin: u.isAdmin,
                });
            }
        });
        this.getMembers(circle.id).value.push(...members);
        return Promise.resolve(circle);
    }

    update(resource: Resource): Promise<void> {
        const subject = this.resources.get(resource.type) as BehaviorSubject<
            Resource[]
        >;

        const index = subject.value.findIndex((e) => e.id === resource.id);
        if (index !== -1) {
            resource.date = new Date().getTime() / 1000;
            switch (resource.type) {
                case 'CIRCLE':
                    this.onChangeCircle(resource);
                    break;
                default:
                    const curr = subject.value[index] as PublishableResource;
                    const next = resource as PublishableResource;
                    if (curr.status !== next.status) {
                        const status = RESOURCE_LABELS[next.status];
                        this.addEvent({
                            date: resource.date,
                            id: resource.date,
                            resourceId: resource.id,
                            resourceType: resource.type,
                            text: `${this.loggedUserProfileURL()} a changé le status de la ressource à “${status}”`,
                        });
                    }

                    if (curr.name !== next.name) {
                        this.addEvent({
                            date: resource.date,
                            id: resource.date,
                            resourceId: resource.id,
                            resourceType: resource.type,
                            text: ` ${this.loggedUserProfileURL()} a changé le nom de la ressource à “${next.name}”`,
                        });
                    }

                    if (curr.description !== next.description) {
                        this.addEvent({
                            date: resource.date,
                            id: resource.date,
                            resourceId: resource.id,
                            resourceType: resource.type,
                            text: ` ${this.loggedUserProfileURL()} a modifié la description de la ressource`,
                        });
                    }
                    break;
            }

            subject.value[index] = resource;
            subject.next(subject.value);
            return Promise.resolve();
        }
        throw new Error(`Resource not found: ${resource.type} ${resource.id}`);
    }

    paginate(
        args: Required<ResourcePaginateArgs>
    ): Observable<ResourcePaginateResult> {
        return this.getResources().pipe(
            map((resources) => {
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
        );
    }

    addEvent(event: ResourceEvent): Promise<void> {
        const events = this.events.get(event.resourceType) as BehaviorSubject<
            ResourceEvent[]
        >;
        events.value.push(event);
        events.next(events.value);
        return Promise.resolve();
    }

    removeEvent(event: ResourceEvent): Promise<void> {
        const events = this.events.get(event.resourceType) as BehaviorSubject<
            ResourceEvent[]
        >;
        events.next(events.value.filter((e) => e.id !== event.id));
        return Promise.resolve();
    }

    listEvents(args: ResourceListEventsArgs): Observable<ResourceEvent[]> {
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

    addMember(member: Member): Promise<void> {
        const contributors = this.getMembers(member.circleId);
        contributors.value.push(member);
        contributors.next(contributors.value);
        this.addEvent({
            date: new Date().getTime() / 1000,
            id: Date.now(),
            resourceId: member.circleId,
            resourceType: 'CIRCLE',
            text: `<a href="profile/${member.id}">${member.userName}</a> vient de rejoindre le cercle`,
        });
        return Promise.resolve();
    }

    updateMember(member: Member): Promise<void> {
        const contributors = this.getMembers(member.circleId);
        contributors.value.forEach((e, i) => {
            if (e.id === member.id) {
                contributors.value[i] = member;
            }
        });
        contributors.next(contributors.value);
        return Promise.resolve();
    }

    removeMember(member: Member): Promise<void> {
        const contributors = this.getMembers(member.circleId);
        contributors.next(contributors.value.filter((e) => e.id !== member.id));
        this.addEvent({
            date: new Date().getTime() / 1000,
            id: Date.now(),
            resourceId: member.circleId,
            resourceType: 'CIRCLE',
            text: `
            <a href="profile/${member.id}">${member.userName}</a>
            a été retiré du cercle par
            <a href="profile/${this.loggedUser?.id}">${this.loggedUser?.userName}</a>
            `,
        });
        return Promise.resolve();
    }

    listMembers(circleId: number): Observable<Member[]> {
        return this.getMembers(circleId).pipe(take(1));
    }

    private days(a: Date, b: Date) {
        // To calculate the time difference of two dates
        const diffInTime = b.getTime() - a.getTime();
        // To calculate the no. of days between two dates
        return diffInTime / (1000 * 3600 * 24);
    }

    private filter(items: Resource[], filters: ResourceFilters) {
        const now = new Date();
        items = items.filter((item) => {
            const past = new Date(item.date * 1000);
            const matches: boolean[] = [];
            matches.push(filters.types.includes(item.type));
            if (item.type !== 'CIRCLE') {
                const { status, circle } = item as PublishableResource;
                matches.push(
                    filters.status === 'ALL' || filters.status === status
                );
                matches.push(
                    !filters.circleId || filters.circleId === circle.id
                );
            }
            matches.push(
                filters.date === 0 || this.days(past, now) < filters.date
            );
            return matches.every((match) => !!match);
        });

        if (filters.query) {
            const fuse = new Fuse<Resource>(items, {
                includeMatches: true,
                findAllMatches: false,
                threshold: 0.2,
                keys: [...RESOURCE_SEARCH_INDEXES],
            });
            items = [];
            fuse.search(filters.query).forEach((match) => {
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
            map((events) => {
                let response: ResourceEvent[] = [];
                events.forEach((array) => {
                    response = response.concat(array);
                });
                return response;
            })
        );
    }

    private getMembers(circleId: number) {
        let members = this.members.get(circleId);
        if (!members) {
            members = new BehaviorSubject<Member[]>([]);
            this.members.set(circleId, members);
        }
        return members;
    }

    private getResources() {
        const queries: Observable<Resource[]>[] = [];
        this.resources.forEach((subject) => {
            queries.push(subject.asObservable());
        });
        return combineLatest(queries).pipe(
            map((resources) => {
                let response: Resource[] = [];
                resources.forEach((array) => {
                    response = response.concat(array);
                });
                return response;
            })
        );
    }

    private onChangeCircle(circle: Circle) {
        const circles = this.resources.get('CIRCLE') as BehaviorSubject<
            Circle[]
        >;
        const exercices = this.resources.get('EXERCISE') as BehaviorSubject<
            Exercise[]
        >;
        const activities = this.resources.get('ACTIVITY') as BehaviorSubject<
            Activity[]
        >;

        circles.value.forEach((v) => {
            const parent = (v as Circle).parent;
            if (parent?.id === circle.id) {
                parent.name = circle.name;
            }
        });

        exercices.value.forEach((v) => {
            if (v.circle.id === circle.id) {
                v.circle.name = circle.name;
            }
        });

        activities.value.forEach((v) => {
            if (v.circle.id === circle.id) {
                v.circle.name = circle.name;
            }
        });

        circles.next(circles.value);
        exercices.next(exercices.value);
        activities.next(activities.value);
    }

    private loggedUserProfileURL() {
        return `<a href="profile/${this.loggedUser?.id}">${this.loggedUser?.userName}</a>`;
    }
}
