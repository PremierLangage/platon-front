import { Injectable } from '@angular/core';
import { DynamicInjectorService } from '@platon/shared/utils';
import { Observable } from 'rxjs';
import { Resource } from '../models/resource';
import {
    ResourceFindByIdArgs,
    ResourcePaginateArgs,
    ResourcePaginateResult,
    ResourceProvider,
} from '../models/resource-provider';

@Injectable({ providedIn: 'root' })
export class ResourceService {
    private get provider() {
        return this.dynamicInjector.get<ResourceProvider>(ResourceProvider);
    }

    constructor(private readonly dynamicInjector: DynamicInjectorService) {}

    /**
     *  Builds a new resource filterer.
     */
    filterer<T extends Resource>() {
        return this.provider.filterer<T>();
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
    paginate<T extends Resource>(
        args: ResourcePaginateArgs
    ): Observable<ResourcePaginateResult<T>> {
        return this.provider.paginate(args);
    }
}