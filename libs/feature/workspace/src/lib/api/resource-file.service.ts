import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Resource } from '../models/resource';
import {
    CreateFileForm,
    MoveFileForm,
    RenameFileForm,
    ResourceFile,
    ResourceTree,
    UpdateFileForm
} from "../models/resource-file";
import { ResourceFileProvider } from '../models/resource-file-provider';

@Injectable({ providedIn: 'root' })
export class ResourceFileService {
    constructor(
        private readonly provider: ResourceFileProvider
    ) { }

    tree(resource: Resource): Observable<ResourceTree> {
        return this.provider.tree(resource);
    }

    read(file: ResourceFile): Observable<string> {
        return this.provider.read(file);
    }
    delete(file: ResourceFile): Observable<any> {
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
}
