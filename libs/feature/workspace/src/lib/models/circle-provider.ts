import { PageResult } from '@platon/shared/utils';
import { Observable } from "rxjs";
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
} from "./circle";

export abstract class CircleProvider {
    abstract tree(): Observable<CircleTree>;
    abstract topics(): Observable<Topic[]>;
    abstract levels(): Observable<Level[]>;

    abstract completion(): Observable<CircleCompletion>;

    abstract search(filters?: CircleFilters): Observable<PageResult<Circle>>;
    abstract findById(id: number): Observable<Circle>;
    abstract findUserPersonal(): Observable<Circle>;

    abstract createCircle(form: CreateCircleForm): Observable<Circle>;
    abstract updateCircle(form: UpdateCircleForm): Observable<Circle>;
    abstract deleteCircle(circle: Circle): Observable<any>;

    // Members

    abstract findMember(circle: Circle, username: string): Observable<CircleMember | undefined>;
    abstract deleteMember(member: CircleMember): Observable<any>;
    abstract listMembers(filters: CircleMembersFilters): Observable<PageResult<CircleMember>>;

    // Watchers

    abstract findWatcher(circle: Circle, username: string): Observable<CircleWatcher | undefined>;
    abstract createWatcher(circle: Circle): Observable<CircleWatcher>;
    abstract deleteWatcher(watcher: CircleWatcher): Observable<any>;
    abstract listWatchers(filters: CircleWatchersFilters): Observable<PageResult<CircleWatcher>>;

    // Invitations

    abstract createInvitation(form: InvitationForm): Observable<CircleInvitation>;
    abstract deleteInvitation(invitation: CircleInvitation): Observable<any>;
    abstract acceptInvitation(invitation: CircleInvitation): Observable<any>;
    abstract findInvitation(circle: Circle, username: string): Observable<CircleInvitation | undefined>;
    abstract listInvitations(filters: CircleInvitationsFilters): Observable<PageResult<CircleInvitation>>;

    // Events
    abstract listEvents(circle: Circle): Observable<PageResult<CircleEvent>>;
    abstract deleteEvent(event: CircleEvent): Observable<any>;
}
