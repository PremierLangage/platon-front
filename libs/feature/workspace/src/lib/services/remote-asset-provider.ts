import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Asset } from '../models/asset';
import { AssetProvider } from '../models/asset-provider';

@Injectable()
export class RemoteAssetProvider extends AssetProvider {
    constructor(private readonly http: HttpClient) {
        super();
    }

    createAsset(): Observable<Asset> {
        throw new Error('Method not implemented.');
    }
}
