import { Injectable } from '@angular/core';
import { AuthChange, AuthObserver } from '@platon/core/auth';
import { DynamicInjectorService } from '@platon/shared/utils';
import { Observable } from 'rxjs';
import { CircleEvent, Contributor, ContributorRequest, Resource } from '../models/resource';
import {
    ResourceFindByIdArgs,
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

    /**
     * Paginates resources of the given type from the server.
     * @param args Arguments of the method.
     */
    paginate(
        args: ResourcePaginateArgs
    ): Observable<ResourcePaginateResult> {
        return this.provider.paginate(args);
    }

    listEvents(
        circleId: string
    ): Observable<CircleEvent[]> {
        return this.provider.listEvents(circleId);
    }
    addEvent(circleId: string, event: CircleEvent): Promise<void> {
        return this.provider.addEvent(circleId, event);
    }
    removeEvent(circleId: string, event: CircleEvent): Promise<void> {
        return this.provider.removeEvent(circleId, event);
    }

    listContributors(
        circleId: string
    ): Observable<Contributor[]> {
        return this.provider.listContributors(circleId);
    }
    addContributor(circleId: string, contributor: Contributor): Promise<void> {
        return this.provider.addContributor(circleId, contributor);
    }
    removeContributor(circleId: string, contributor: Contributor): Promise<void> {
        return this.provider.removeContributor(circleId, contributor);
    }

    listRequests(
        circleId: string
    ): Observable<ContributorRequest[]> {
        return this.provider.listRequests(circleId);
    }
    addRequest(circleId: string, request: ContributorRequest): Promise<void> {
        return this.provider.addRequest(circleId, request);
    }
    removeRequest(circleId: string, request: ContributorRequest): Promise<void> {
        return this.provider.removeRequest(circleId, request);
    }

    onChangeAuth(change: AuthChange) {
        this.provider.onChangeAuth(change);
    }
}
