import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
    Circle,
    Member,
    Resource,
    ResourceEvent,
    ResourceTypes
} from '../models/resource';
import {
    ResourceFindByIdArgs,
    ResourceFormCreateCircle,
    ResourceListEventsArgs,
    ResourcePaginateArgs,
    ResourcePaginateResult,
    ResourceProvider
} from '../models/resource-provider';

@Injectable()
export class RemoteResourceProvider extends ResourceProvider {

    suggestions(): Observable<Record<ResourceTypes, string[]>> {
        throw new Error('Method not implemented.');
    }
    findById<T extends Resource>(args: ResourceFindByIdArgs): Observable<T | undefined> {
        throw new Error('Method not implemented.');
    }
    update(resource: Resource): Promise<void> {
        throw new Error('Method not implemented.');
    }
    createCircle(form: ResourceFormCreateCircle): Promise<Circle> {
        throw new Error('Method not implemented.');
    }
    paginate(args: ResourcePaginateArgs): Observable<ResourcePaginateResult> {
        throw new Error('Method not implemented.');
    }
    addEvent(event: ResourceEvent): Promise<void> {
        throw new Error('Method not implemented.');
    }
    removeEvent(event: ResourceEvent): Promise<void> {
        throw new Error('Method not implemented.');
    }
    listEvents(args: ResourceListEventsArgs): Observable<ResourceEvent[]> {
        return of([])
    }
    addMember(member: Member): Promise<void> {
        throw new Error('Method not implemented.');
    }
    removeMember(member: Member): Promise<void> {
        throw new Error('Method not implemented.');
    }
    updateMember(member: Member): Promise<void> {
        throw new Error('Method not implemented.');
    }
    listMembers(circleId: number): Observable<Member[]> {
        throw new Error('Method not implemented.');
    }
}
