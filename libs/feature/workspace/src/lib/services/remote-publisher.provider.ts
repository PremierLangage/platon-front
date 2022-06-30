import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Publisher, PublisherForm } from '../models/publisher';
import { PublisherProvider } from '../models/publisher-provider';

@Injectable()
export class RemotePublisherProvider extends PublisherProvider {
    constructor(private readonly http: HttpClient) {
        super();
    }

    publish(form: PublisherForm): Observable<Publisher> {
        return this.http.post<Publisher>('/api/v1/asset/', {
            name: form.name,
            resource: form.resource.id,
            resource_version: 'master',
        });
    }

    get(): Observable<Publisher> {
        return this.http.get<Publisher>('/api/v1/asset/');
    }
}
