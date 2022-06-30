import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Asset } from '../models/asset';
import { Publisher, PublisherForm } from '../models/publisher';
import { PublisherProvider } from '../models/publisher-provider';

@Injectable({ providedIn: 'root' })
export class PublisherService {
    constructor(private readonly provider: PublisherProvider) {}

    get(): Observable<Publisher> {
        return this.provider.get();
    }

    post(form: PublisherForm): Observable<Publisher> {
        return this.provider.publish(form);
    }
}
