import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FileProvider } from '../models/file-provider';

@Injectable()
export class RemoteFileProvider extends FileProvider {
    constructor(
        private readonly http: HttpClient
    ) {
        super()
    }
}
