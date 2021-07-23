import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { PageResult } from '@platon/shared/utils';
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";
import { CircleProvider } from "../models/circle-provider";
import {
    Circle,
    CircleCompletion,
    CircleEvent,
    CircleFilters,
    CreateCircleForm,
    CircleMember,
    CircleTree,
    CircleWatcher,
    CircleInvitation,
    InvitationForm,
    Level,
    Topic,
    UpdateCircleForm,
    CircleMembersFilters,
    CircleInvitationsFilters,
    CircleWatchersFilters
} from "../models/circle";

@Injectable()
export class RemoteCircleProvider extends CircleProvider {
    constructor(private readonly http: HttpClient) {
        super();
    }

    tree(): Observable<CircleTree> {
        return this.http.get<CircleTree>('/api/v1/circles/tree/');
    }

    topics(): Observable<Topic[]> {
        return this.http.get<Topic[]>('/api/v1/topics/?no_page');
    }

    levels(): Observable<Level[]> {
        return this.http.get<Level[]>('/api/v1/levels/');
    }

    completion(): Observable<CircleCompletion> {
        return this.http.get<CircleCompletion>('/api/v1/circles/completion/');
    }


    search(filters?: CircleFilters): Observable<PageResult<Circle>> {
        filters = filters || {};
        let params = new HttpParams();
        if (filters.search) {
            params = params.append('search', filters.search);
        }

        // type
        if (filters.opened != null) {
            params = params.append('opened', filters.opened.toString());
        }

        if (filters.watchers) {
            filters.watchers.forEach(e => {
                params = params.append('watcher', e);
            });
        }

        if (filters.members) {
            filters.members.forEach(e => {
                params = params.append('member', e);
            });
        }

        // order

        if (filters.orderBy) {
            const ordering = ({
                'name': 'name',
                'date': '-updated_at',
                'members': '-members_count',
                'watchers': '-watchers_count',
                'resources': '-resources_count',
            } as any)[filters.orderBy];
            params = params.append('ordering', ordering);
        }

        // date
        if (filters.updatedAt) {
            params = params.append('updated_at', filters.updatedAt.toString());
        }

        // pagination
        if (filters.limit) {
            params = params.append('limit', filters.limit.toString());
        }

        if (filters.offset) {
            params = params.append('offset', filters.offset.toString());
        }

        return this.http.get<PageResult<Circle>>(`/api/v1/circles/`, {
            params,
        });
    }

    findById(id: number): Observable<Circle> {
        return this.http.get<Circle>(`/api/v1/circles/${id}/`);
    }

    createCircle(form: CreateCircleForm): Observable<Circle> {
        return this.http.post<Circle>('/api/v1/circles/', {
            ...form,
            type: 'PUBLIC'
        });
    }

    updateCircle(form: UpdateCircleForm): Observable<Circle> {
        return this.http.patch<Circle>(form.circle.url, form);
    }

    deleteCircle(circle: Circle): Observable<any> {
        return this.http.delete<any>(circle.url);
    }

    // Members

    findMember(circle: Circle, username: string): Observable<CircleMember | undefined> {
        return this.http.get<CircleMember>(`${circle.membersUrl}${username}/`).pipe(
            catchError(() => {
                return of(undefined);
            })
        );
    }

    deleteMember(member: CircleMember): Observable<any> {
        return this.http.delete<any>(member.url);
    }

    listMembers(filters: CircleMembersFilters): Observable<PageResult<CircleMember>> {
        const { circle  } = filters;
        let params = new HttpParams();
        if (filters.search) {
            params = params.append('search', filters.search);
        }
        if (filters.limit) {
            params = params.append('limit', filters.limit.toString());
        }

        if (filters.offset) {
            params = params.append('offset', filters.offset.toString());
        }
        return this.http.get<PageResult<CircleMember>>(circle.membersUrl, {
            params
        });
    }

    // Watchers

    findWatcher(circle: Circle, username: string): Observable<CircleWatcher | undefined> {
        return this.http.get<CircleWatcher>(`${circle.watchersUrl}${username}/`).pipe(
            catchError<any, any>(() => {
                return of(undefined);
            })
        );
    }

    createWatcher(circle: Circle): Observable<CircleWatcher> {
        return this.http.post<CircleWatcher>(circle.watchersUrl, {});
    }

    deleteWatcher(watcher: CircleWatcher): Observable<any> {
        return this.http.delete<CircleWatcher>(watcher.url);
    }

    listWatchers(filters: CircleWatchersFilters): Observable<PageResult<CircleWatcher>> {
        const { circle  } = filters;
        let params = new HttpParams();
        if (filters.search) {
            params = params.append('search', filters.search);
        }
        if (filters.limit) {
            params = params.append('limit', filters.limit.toString());
        }

        if (filters.offset) {
            params = params.append('offset', filters.offset.toString());
        }
        return this.http.get<PageResult<CircleWatcher>>(circle.watchersUrl, {
            params
        });
    }

    // Invitations

    createInvitation(form: InvitationForm): Observable<CircleInvitation> {
        return this.http.post<CircleInvitation>(form.circle.invitationsUrl, {
            invitee: form.invitee,
            status: form.status,
        });
    }

    deleteInvitation(invitation: CircleInvitation): Observable<any> {
        return this.http.delete<any>(invitation.url);
    }

    acceptInvitation(invitation: CircleInvitation): Observable<any> {
        return this.http.patch<CircleInvitation>(invitation.url, {});
    }

    findInvitation(circle: Circle, username: string): Observable<CircleInvitation | undefined> {
        return this.http.get<CircleInvitation>(`${circle.invitationsUrl}${username}/`).pipe(
            catchError(() => {
                return of(undefined);
            })
        );
    }

    listInvitations(filters: CircleInvitationsFilters): Observable<PageResult<CircleInvitation>> {
        const { circle  } = filters;
        let params = new HttpParams();
        if (filters.search) {
            params = params.append('search', filters.search);
        }
        if (filters.limit) {
            params = params.append('limit', filters.limit.toString());
        }

        if (filters.offset) {
            params = params.append('offset', filters.offset.toString());
        }
        return this.http.get<PageResult<CircleInvitation>>(circle.invitationsUrl, {
            params
        });
    }


    // Events
    listEvents(circle: Circle): Observable<PageResult<CircleEvent>> {
        return this.http.get<PageResult<CircleEvent>>(circle.eventsUrl);
    }

    deleteEvent(event: CircleEvent): Observable<any> {
        return this.http.delete(event.url);
    }
}
