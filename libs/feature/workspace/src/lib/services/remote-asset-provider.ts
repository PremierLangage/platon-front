import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Asset } from '../models/asset';
import { AssetProvider } from '../models/asset-provider';

@Injectable()
export class RemoteAssetProvider extends AssetProvider {
    constructor(private readonly http: HttpClient) {
        super();
    }

    findById(id: number): Observable<Asset> {
        return this.http.get<Asset>(`/api/v1/asset/${id}`);
    }
}
