import { Injectable } from '@angular/core';
import { PageResult } from '@platon/shared/utils';
import { Observable } from 'rxjs';
import { CircleProvider } from '../models/circle-provider';
import {
    Circle,
    CircleCompletion,
    CircleEvent,
    CircleFilters,
    CircleForm,
    CircleMember,
    CircleTree,
    CircleWatcher,
    Invitation,
    InvitationForm,
    Level,
    Topic
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

    findUserPersonal(): Observable<Circle> {
        return this.provider.findUserPersonal();
    }

    findWatchedBy(username: string): Observable<PageResult<Circle>> {
        return this.provider.search({
            limit: 5,
            watchers: [username]
        });
    }

    createCircle(form: CircleForm): Observable<Circle> {
        return this.provider.createCircle(form);
    }


    // Members

    findMember(circle: Circle, username: string): Observable<CircleMember | undefined> {
        return this.provider.findMember(circle, username);
    }

    deleteMember(member: CircleMember): Observable<any> {
        return this.provider.deleteMember(member);
    }

    listMembers(circle: Circle): Observable<PageResult<CircleMember>> {
        return this.provider.listMembers(circle);
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

    listWatchers(circle: Circle): Observable<PageResult<CircleWatcher>> {
        return this.provider.listWatchers(circle);
    }

    // Invitations

    createInvitation(form: InvitationForm): Observable<Invitation> {
        return this.provider.createInvitation(form);
    }

    deleteInvitation(invitation: Invitation): Observable<any> {
        return this.provider.deleteInvitation(invitation);
    }

    acceptInvitation(invitation: Invitation): Observable<any> {
        return this.provider.acceptInvitation(invitation);
    }

    findInvitation(circle: Circle, username: string): Observable<Invitation | undefined> {
        return this.provider.findInvitation(circle, username);
    }

    listInvitations(circle: Circle): Observable<PageResult<Invitation>> {
        return this.provider.listInvitations(circle);
    }

    // Events
    listEvents(circle: Circle): Observable<PageResult<CircleEvent>> {
        return this.provider.listEvents(circle);
    }

    deleteEvent(event: CircleEvent): Observable<any> {
        return this.provider.deleteEvent(event);
    }
}