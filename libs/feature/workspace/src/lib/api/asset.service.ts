import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Asset, AssetList } from "../models/asset";
import { AssetProvider } from "../models/asset-provider";


@Injectable({ providedIn: 'root' })
export class AssetService {
    constructor(
        private readonly provider: AssetProvider
    ) { }

    get(): Observable<AssetList> {
        return this.provider.get();
    }

    getAssetByPath(path: string): Observable<Asset> {
        return this.provider.getAssetByPath(path);
    }

    getRunnableAssetByPath(path: string): Observable<any> {
        return this.provider.getRunnbleAssetByPath(path);
    }

    me(): Observable<AssetList> {
        return this.provider.me();
    }

}
