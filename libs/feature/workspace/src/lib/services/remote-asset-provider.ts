import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";
import { Asset, AssetList } from "../models/asset";
import { AssetProvider } from "../models/asset-provider";


@Injectable()
export class RemoteAssetProvider extends AssetProvider {
    constructor(private readonly http: HttpClient) {
        super();
    }

    get(): Observable<AssetList> {
        return this.http.get<AssetList>('/api/v1/asset/');
    }

    getAssetByPath(path: string): Observable<Asset> {
        return this.http.get<Asset>(`/api/v1/asset/${path}/`);
    }

    getRunnbleAssetByPath(path: string): Observable<any> {
        return this.http.get<Asset>(`/api/v1/play/asset/${path}/`);
    }

    me(): Observable<AssetList> {
        return this.http.get<AssetList>('/api/v1/asset/me/');
    }


}
