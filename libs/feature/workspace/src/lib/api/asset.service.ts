import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Asset } from '../models/asset';
import { AssetProvider } from '../models/asset-provider';

@Injectable({ providedIn: 'root' })
export class AssetService {
    constructor(private readonly provider: AssetProvider) {}

    findById(id: number): Observable<Asset> {
        return this.provider.findById(id);
    }
}
