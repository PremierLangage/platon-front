import { Observable } from 'rxjs';
import { Resource, ResourceTypes } from './resource';

export abstract class ResourceProvider {
    abstract findById(type: ResourceTypes, id: string): Observable<Resource | undefined>;
    abstract listOfType(type: ResourceTypes): Observable<Resource[]>;
}
