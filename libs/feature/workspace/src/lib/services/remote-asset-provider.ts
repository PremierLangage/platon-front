import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";
import { Asset, AssetList, UpdateAssetForm } from "../models/asset";
import { AssetProvider } from "../models/asset-provider";


@Injectable()
export class RemoteAssetProvider extends AssetProvider {
    constructor(private readonly http: HttpClient) {
        super();
    }

    get(): Observable<AssetList> {
        return this.http.get<AssetList>('/api/v1/asset/');
    }

    patch(form: UpdateAssetForm): Observable<any> {
        return this.http.patch<Asset>(`/api/v1/asset/${form.path}/`, {
            content: form.content
        });
    }

    getAssetByPath(path: string): Observable<Asset> {
        return this.http.get<Asset>(`/api/v1/asset/${path}/`);
    }

    getLive(id: number) {
        return this.http.get<Asset>(`/api/v1/live/resource/${id}/`);
    }

    getRunnbleAssetByPath(path: string): Observable<any> {
        return this.http.get<Asset>(`/api/v1/play/asset/${path}/`);
    }

    me(): Observable<AssetList> {
        return this.http.get<AssetList>('/api/v1/asset/me/');
    }


}
