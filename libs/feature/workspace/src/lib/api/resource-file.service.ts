import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Resource } from '../models/resource';
import {
    CreateFileForm,
    DeleteFileForm,
    MoveFileForm,
    RenameFileForm,
    ResourceFile,
    UpdateFileForm
} from "../models/resource-file";
import { ResourceFileProvider } from '../models/resource-file-provider';

@Injectable({ providedIn: 'root' })
export class ResourceFileService {
    constructor(
        private readonly provider: ResourceFileProvider
    ) { }

    tree(resource: Resource): Observable<ResourceFile> {
        return this.provider.tree(resource);
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
    delete(form: DeleteFileForm): Observable<any> {
        return this.provider.delete(form);
    }
}
