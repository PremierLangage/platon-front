import { Injectable } from '@angular/core';
import { AuthChange, AuthObserver } from '@platon/core/auth';
import { Observable } from 'rxjs';
import { ResourceEvent, Member, Resource, Circle } from '../models/resource';
import {
    ResourceFindByIdArgs,
    ResourceFormCreateCircle,
    ResourceListEventsArgs,
    ResourcePaginateArgs,
    ResourcePaginateResult,
    ResourceProvider
} from '../models/resource-provider';

@Injectable({ providedIn: 'root' })
export class ResourceService implements AuthObserver {

    constructor(
        private readonly provider: ResourceProvider
    ) {}

    /**
     *  Builds a new resource filterer.
     */
    suggestions() {
        return this.provider.suggestions();
    }

    /**
     * Finds the resource of the given type identified by the given identifier.
     * @param args Arguments of the method.
     */
    findById<T extends Resource>(
        args: ResourceFindByIdArgs
    ): Observable<T | undefined> {
        //  TODO use a cache system.
        return this.provider.findById(args);
    }

    update(resource: Resource): Promise<void> {
        return this.provider.update(resource);
    }

    createCircle(form: ResourceFormCreateCircle): Promise<Circle> {
        return this.provider.createCircle(form);
    }

    /**
     * Paginates resources of the given type from the server.
     * @param args Arguments of the method.
     */
    paginate(
        args: ResourcePaginateArgs
    ): Observable<ResourcePaginateResult> {
        return this.provider.paginate(args);
    }


    addEvent(event: ResourceEvent): Promise<void> {
        return this.provider.addEvent(event);
    }

    removeEvent(event: ResourceEvent): Promise<void> {
        return this.provider.removeEvent(event);
    }

    listEvents(
        args: ResourceListEventsArgs
    ): Observable<ResourceEvent[]> {
        return this.provider.listEvents(args);
    }


    addMember(member: Member): Promise<void> {
        return this.provider.addMember(member);
    }

    updateMember(member: Member): Promise<void> {
        return this.provider.updateMember(member);
    }

    removeMember(member: Member): Promise<void> {
        return this.provider.removeMember(member);
    }

    listMembers(
        circleId: number
    ): Observable<Member[]> {
        return this.provider.listMembers(circleId);
    }

    onChangeAuth(change: AuthChange) {
        this.provider.onChangeAuth(change);
    }
}
