import { Injectable } from '@angular/core';
import { AssetProvider } from '../models/asset-provider';

@Injectable({ providedIn: 'root' })
export class AssetService {
    constructor(private readonly provider: AssetProvider) {}
}
