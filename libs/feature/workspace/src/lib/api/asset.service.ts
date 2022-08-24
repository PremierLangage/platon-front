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

    getByPath(path: string[]): Observable<Asset> {
        return this.provider.getByPath(path);
    }

}
