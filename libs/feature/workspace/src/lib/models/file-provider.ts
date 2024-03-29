import { Observable } from "rxjs";
import {
    CreateFileForm,
    UpdateFileForm,
    RenameFileForm,
    MoveFileForm,
    FileTree,
    FileEntry
} from "./file";
import { Circle } from "./circle";
import { Resource } from './resource';

export abstract class FileProvider {
    abstract tree(owner: Resource | Circle): Observable<FileTree>;

    abstract read(file: FileEntry): Observable<string>;
    abstract delete(file: FileEntry): Observable<any>;

    abstract create(form: CreateFileForm): Observable<any>;
    abstract move(form: MoveFileForm): Observable<any>;
    abstract update(form: UpdateFileForm): Observable<any>;
    abstract rename(form: RenameFileForm): Observable<any>;
}
