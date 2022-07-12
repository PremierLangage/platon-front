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

    findBySlug(slug: string): Observable<Asset | undefined> {
        return this.provider.findBySlug(slug);
    }

    me(): Observable<AssetList> {
        return this.provider.me();
    }

}
