import { Observable } from "rxjs";
import {
    CreateFileForm,
    UpdateFileForm,
    RenameFileForm,
    MoveFileForm,
    ResourceTree,
    ResourceFile
} from "./resource-file";
import { Resource } from './resource';

export abstract class ResourceFileProvider {
    abstract tree(resource: Resource): Observable<ResourceTree>;

    abstract read(file: ResourceFile): Observable<string>;
    abstract delete(file: ResourceFile): Observable<any>;

    abstract create(form: CreateFileForm): Observable<any>;
    abstract move(form: MoveFileForm): Observable<any>;
    abstract update(form: UpdateFileForm): Observable<any>;
    abstract rename(form: RenameFileForm): Observable<any>;
}
