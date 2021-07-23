import { Injectable } from '@angular/core';
import { PageResult } from '@platon/shared/utils';
import { Observable } from 'rxjs';
import { CircleProvider } from '../models/circle-provider';
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
    CircleWatchersFilters,
    CircleInvitationsFilters
} from "../models/circle";

@Injectable({ providedIn: 'root' })
export class CircleService {

    constructor(
        private readonly provider: CircleProvider,
    ) { }

    tree(): Observable<CircleTree> {
        return this.provider.tree();
    }

    topics(): Observable<Topic[]> {
        return this.provider.topics();
    }

    levels(): Observable<Level[]> {
        return this.provider.levels();
    }

    completion(): Observable<CircleCompletion> {
        return this.provider.completion();
    }


    search(filters?: CircleFilters): Observable<PageResult<Circle>> {
        return this.provider.search(filters);
    }

    findById(id: number): Observable<Circle> {
        return this.provider.findById(id);
    }

    findWatchedBy(username: string): Observable<PageResult<Circle>> {
        return this.provider.search({
            limit: 5,
            watchers: [username]
        });
    }

    createCircle(form: CreateCircleForm): Observable<Circle> {
        return this.provider.createCircle(form);
    }

    updateCircle(form: UpdateCircleForm): Observable<Circle> {
        return this.provider.updateCircle(form);
    }

    deleteCircle(circle: Circle): Observable<any> {
        return this.provider.deleteCircle(circle);
    }

    // Members

    findMember(circle: Circle, username: string): Observable<CircleMember | undefined> {
        return this.provider.findMember(circle, username);
    }
    deleteMember(member: CircleMember): Observable<any> {
        return this.provider.deleteMember(member);
    }
    listMembers(filters: CircleMembersFilters): Observable<PageResult<CircleMember>> {
        return this.provider.listMembers(filters);
    }

    // Watchers

    findWatcher(circle: Circle, username: string): Observable<CircleWatcher | undefined> {
        return this.provider.findWatcher(circle, username);
    }
    createWatcher(circle: Circle): Observable<CircleWatcher> {
        return this.provider.createWatcher(circle);
    }
    deleteWatcher(watcher: CircleWatcher): Observable<any> {
        return this.provider.deleteWatcher(watcher);
    }
    listWatchers(filters: CircleWatchersFilters): Observable<PageResult<CircleWatcher>> {
        return this.provider.listWatchers(filters);
    }

    // Invitations

    createInvitation(form: InvitationForm): Observable<CircleInvitation> {
        return this.provider.createInvitation(form);
    }
    deleteInvitation(invitation: CircleInvitation): Observable<any> {
        return this.provider.deleteInvitation(invitation);
    }
    acceptInvitation(invitation: CircleInvitation): Observable<any> {
        return this.provider.acceptInvitation(invitation);
    }
    findInvitation(circle: Circle, username: string): Observable<CircleInvitation | undefined> {
        return this.provider.findInvitation(circle, username);
    }
    listInvitations(filters: CircleInvitationsFilters): Observable<PageResult<CircleInvitation>> {
        return this.provider.listInvitations(filters);
    }

    // Events
    listEvents(circle: Circle): Observable<PageResult<CircleEvent>> {
        return this.provider.listEvents(circle);
    }

    deleteEvent(event: CircleEvent): Observable<any> {
        return this.provider.deleteEvent(event);
    }
}
