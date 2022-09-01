import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Asset, AssetList, CreateAssetForm } from "../models/asset";
import { AssetProvider } from "../models/asset-provider";

@Injectable()
export class RemoteAssetsProvider extends AssetProvider {

    constructor(private readonly http: HttpClient) {
        super();
    }

    get(): Observable<AssetList> {
        return this.http.get<AssetList>('/api/v1/asset');
    }

    getByPath(path: string[]): Observable<Asset> {
        return this.http.get<Asset>(`/api/v1/asset/${path.join('/')}/`);
    }

    create(form: CreateAssetForm): Observable<Asset> {
        return this.http.post<Asset>(`/api/v1/asset/`, form);
    }

}
