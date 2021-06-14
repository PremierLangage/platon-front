import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Resource } from '../models/resource';
import { CreateFileForm, DeleteFileForm, MoveFileForm, RenameFileForm, ResourceFile, UpdateFileForm } from '../models/resource-file';
import { ResourceFileProvider } from '../models/resource-file-provider';

@Injectable()
export class RemoteResourceFileProvider extends ResourceFileProvider {
    constructor(
        private readonly http: HttpClient
    ) {
        super()
    }

    tree(resource: Resource): Observable<ResourceFile> {
        return this.http.get<any>(resource.filesUrl).pipe(
            map(res => res.files)
        );
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
        throw new Error('Method not implemented.');
    }

    rename(form: RenameFileForm): Observable<any> {
        return this.http.patch<any>(`${form.resource.filesUrl}/${form.oldpath}`, {
            action: 'rename',
            newpath: form.newpath,
        });
    }

    delete(form: DeleteFileForm): Observable<any> {
        return this.http.delete<any>(`${form.resource.filesUrl}/${form.path}`);
    }
}
