import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Resource } from '../models/resource';
import {
    CreateFileForm,
    MoveFileForm,
    RenameFileForm,
    FileEntry,
    FileTree,
    UpdateFileForm
} from '../models/file';
import { FileProvider } from '../models/file-provider';
import { Circle } from '../models/circle';

@Injectable()
export class RemoteFileProvider extends FileProvider {
    constructor(
        private readonly http: HttpClient
    ) {
        super()
    }

    tree(resource: Resource | Circle): Observable<FileTree> {
        return this.http.get<FileTree>(resource.filesUrl).pipe(
            map(res => res)
        );
    }

    read(file: FileEntry): Observable<string> {
        return this.http.get<string>(file.url);
    }

    delete(file: FileEntry): Observable<any> {
        return this.http.delete<any>(file.url);
    }

    create(form: CreateFileForm): Observable<any> {
        return this.http.post<any>(form.owner.filesUrl, {
            files: form.files
        });
    }

    move(form: MoveFileForm): Observable<any> {
        return this.http.patch<any>(`${form.owner.filesUrl}/${form.oldpath}`, {
            action: 'move',
            newpath: form.newpath,
            copy: !!form.copy
        });
    }

    update(form: UpdateFileForm): Observable<any> {
        return this.http.put<any>(form.file.url, {
            content: form.content
        });
    }

    rename(form: RenameFileForm): Observable<any> {
        return this.http.patch<any>(`${form.owner.filesUrl}/${form.oldpath}`, {
            action: 'rename',
            newpath: form.newpath,
        });
    }
}
