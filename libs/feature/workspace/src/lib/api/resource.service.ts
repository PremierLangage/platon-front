import { Injectable } from '@angular/core';
import { AuthChange, AuthObserver } from '@platon/core/auth';
import { DynamicInjectorService } from '@platon/shared/utils';
import { Observable } from 'rxjs';
import { ResourceEvent, Contributor, ContributorRequest, Resource } from '../models/resource';
import {
    ResourceFindByIdArgs,
    ResourceListEventsArgs,
    ResourcePaginateArgs,
    ResourcePaginateResult,
    ResourceProvider
} from '../models/resource-provider';

@Injectable({ providedIn: 'root' })
export class ResourceService implements AuthObserver {
    private get provider() {
        return this.dynamicInjector.get<ResourceProvider>(ResourceProvider);
    }

    constructor(private readonly dynamicInjector: DynamicInjectorService) {}

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

    addContributor(circleId: string, contributor: Contributor): Promise<void> {
        return this.provider.addContributor(circleId, contributor);
    }
    removeContributor(circleId: string, contributor: Contributor): Promise<void> {
        return this.provider.removeContributor(circleId, contributor);
    }
    listContributors(
        circleId: string
    ): Observable<Contributor[]> {
        return this.provider.listContributors(circleId);
    }

    addContributorRequest(request: ContributorRequest): Promise<void> {
        return this.provider.addContributorRequest(request);
    }
    removeContributorRequest(request: ContributorRequest): Promise<void> {
        return this.provider.removeContributorRequest(request);
    }
    listContributorRequests(
        circleId: string
    ): Observable<ContributorRequest[]> {
        return this.provider.listContributorRequests(circleId);
    }

    onChangeAuth(change: AuthChange) {
        this.provider.onChangeAuth(change);
    }
}
