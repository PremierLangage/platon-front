import { Observable } from "rxjs";
import { Circle, CircleMember, CircleTree, CircleWatcher, Invitation, MemberStatus } from "./models";

export abstract class CircleProvider {
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
}

export interface CircleFilters {
    name?: string;
    search?: string;
    parent?: number;
    topics?: string[];
    levels?: string[];
    updatedAt?: 0 | 1 | 7 | 31 | 180 | 365;
    members?: string[];
    watchers?: string[];
    offset?: number;
    limit?: number;
    orderBy?: 'name' | 'updateAt' | 'membersCount' | 'watchersCount' | 'resourcesCount';
}
export interface PageResult<T> {
    count: number;
    next: string;
    previous: string;
    results: T[];
}

export interface InvitationForm {
    circle: Circle;
    invitee: string;
    status: MemberStatus;
}
