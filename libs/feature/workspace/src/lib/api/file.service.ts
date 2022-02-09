import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Resource } from '../models/resource';
import {
    CreateFileForm,
    MoveFileForm,
    RenameFileForm,
    FileEntry,
    FileTree,
    UpdateFileForm,
} from '../models/file';
import { FileProvider } from '../models/file-provider';
import { Circle } from '../models/circle';

@Injectable({ providedIn: 'root' })
export class FileService {
    constructor(private readonly provider: FileProvider) {}

    tree(owner: Resource | Circle): Observable<FileTree> {
        return this.provider.tree(owner);
    }

    read(file: FileEntry): Observable<string> {
        return this.provider.read(file);
    }

    delete(file: FileEntry): Observable<any> {
        return this.provider.delete(file);
    }

    create(form: CreateFileForm): Observable<any> {
        return this.provider.create(form);
    }

    move(form: MoveFileForm): Observable<any> {
        return this.provider.move(form);
    }

    update(form: UpdateFileForm): Observable<any> {
        return this.provider.update(form);
    }

    rename(form: RenameFileForm): Observable<any> {
        return this.provider.rename(form);
    }

    options(owner: Resource | Circle): Observable<any> {
        return this.provider.options(owner);
    }
}
