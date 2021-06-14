import { Observable } from "rxjs";
import {
    ResourceFile,
    CreateFileForm,
    UpdateFileForm,
    RenameFileForm,
    MoveFileForm,
    DeleteFileForm
} from "./resource-file";
import { Resource } from './resource';

export abstract class ResourceFileProvider {
    abstract tree(resource: Resource): Observable<ResourceFile>;
    abstract create(form: CreateFileForm): Observable<any>;
    abstract move(form: MoveFileForm): Observable<any>;
    abstract update(form: UpdateFileForm): Observable<any>;
    abstract rename(form: RenameFileForm): Observable<any>;
    abstract delete(form: DeleteFileForm): Observable<any>;
}
