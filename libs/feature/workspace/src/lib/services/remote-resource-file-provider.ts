import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Resource } from '../models/resource';
import {
    CreateFileForm,
    MoveFileForm,
    RenameFileForm,
    ResourceFile,
    ResourceTree,
    UpdateFileForm
} from '../models/resource-file';
import { ResourceFileProvider } from '../models/resource-file-provider';

@Injectable()
export class RemoteResourceFileProvider extends ResourceFileProvider {
    constructor(
        private readonly http: HttpClient
    ) {
        super()
    }

    tree(resource: Resource): Observable<ResourceTree> {
        return this.http.get<ResourceTree>(resource.filesUrl).pipe(
            map(res => res)
        );
    }

    read(file: ResourceFile): Observable<string> {
        return this.http.get<string>(file.url);
    }

    delete(file: ResourceFile): Observable<any> {
        return this.http.delete<any>(file.url);
    }

    create(form: CreateFileForm): Observable<any> {
        return this.http.post<any>(form.resource.filesUrl, {
            files: form.files
        });
    }

    move(form: MoveFileForm): Observable<any> {
        return this.http.patch<any>(`${form.resource.filesUrl}/${form.oldpath}`, {
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
        return this.http.patch<any>(`${form.resource.filesUrl}/${form.oldpath}`, {
            action: 'rename',
            newpath: form.newpath,
        });
    }
}
