import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { PageResult } from '@platon/shared/utils';
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";
import { CircleFilters, CircleProvider, InvitationForm } from "../models/circle-provider";
import { Circle, CircleEvent, CircleMember, CircleTree, CircleWatcher, Invitation } from "../models/models";

@Injectable()
export class RemoteCircleProvider extends CircleProvider {
    constructor(
        private readonly http: HttpClient,
    ) {
        super();
    }

    tree(): Observable<CircleTree> {
        return this.http.get<CircleTree>('/api/v1/circles/tree/');
    }

    search(filters?: CircleFilters): Observable<PageResult<Circle>> {
        filters = filters || {};
        let params = new HttpParams();
        if (filters.watchers) {
            filters.watchers.forEach(e => {
                params = params.append('watcher', e);
            });
        }

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

    findUserPersonal(): Observable<Circle> {
        return this.http.get<Circle>('/api/v1/circles/me/');
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

    listMembers(circle: Circle): Observable<PageResult<CircleMember>> {
        return this.http.get<PageResult<CircleMember>>(circle.membersUrl);
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

    listWatchers(circle: Circle): Observable<PageResult<CircleWatcher>> {
        return this.http.get<PageResult<CircleWatcher>>(circle.watchersUrl);
    }

    // Invitations

    createInvitation(form: InvitationForm): Observable<Invitation> {
        return this.http.post<Invitation>(form.circle.invitationsUrl, {
            invitee: form.invitee,
            status: form.status,
        });
    }

    deleteInvitation(invitation: Invitation): Observable<any> {
        return this.http.delete<any>(invitation.url);
    }

    acceptInvitation(invitation: Invitation): Observable<any> {
        return this.http.patch<Invitation>(invitation.url, {});
    }

    findInvitation(circle: Circle, username: string): Observable<Invitation | undefined> {
        return this.http.get<Invitation>(`${circle.invitationsUrl}${username}/`).pipe(
            catchError(() => {
                return of(undefined);
            })
        );
    }

    listInvitations(circle: Circle): Observable<PageResult<Invitation>> {
        return this.http.get<PageResult<Invitation>>(circle.invitationsUrl);
    }


    // Events
    listEvents(circle: Circle): Observable<PageResult<CircleEvent>> {
        return this.http.get<PageResult<CircleEvent>>(circle.eventsUrl);
    }

    deleteEvent(event: CircleEvent): Observable<any> {
        return this.http.delete(event.url);
    }
}
