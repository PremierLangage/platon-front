import { PageResult } from '@platon/shared/utils';
import { Observable } from "rxjs";
import {
    Circle,
    CircleCompletion,
    CircleEvent,
    CircleFilters,
    CircleMember,
    CircleTree,
    CircleWatcher,
    Invitation,
    InvitationForm
} from "./models";

export abstract class CircleProvider {
    abstract circleCompletion(): Observable<CircleCompletion>;

    abstract tree(): Observable<CircleTree>;
    abstract search(filters?: CircleFilters): Observable<PageResult<Circle>>;
    abstract findById(id: number): Observable<Circle>;
    abstract findUserPersonal(): Observable<Circle>;

    // Members

    abstract findMember(circle: Circle, username: string): Observable<CircleMember | undefined>;
    abstract deleteMember(member: CircleMember): Observable<any>;
    abstract listMembers(circle: Circle): Observable<PageResult<CircleMember>>;

    // Watchers

    abstract findWatcher(circle: Circle, username: string): Observable<CircleWatcher | undefined>;
    abstract createWatcher(circle: Circle): Observable<CircleWatcher>;
    abstract deleteWatcher(watcher: CircleWatcher): Observable<any>;
    abstract listWatchers(circle: Circle): Observable<PageResult<CircleWatcher>>;

    // Invitations

    abstract createInvitation(form: InvitationForm): Observable<Invitation>;
    abstract deleteInvitation(invitation: Invitation): Observable<any>;
    abstract acceptInvitation(invitation: Invitation): Observable<any>;
    abstract findInvitation(circle: Circle, username: string): Observable<Invitation | undefined>;
    abstract listInvitations(circle: Circle): Observable<PageResult<Invitation>>;

    // Events
    abstract listEvents(circle: Circle): Observable<PageResult<CircleEvent>>;
    abstract deleteEvent(event: CircleEvent): Observable<any>;
}
