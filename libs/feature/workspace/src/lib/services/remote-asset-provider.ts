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

    findBySlug(slug: string): Observable<Asset | undefined> {
        return this.http.get<Asset>(`/api/v1/asset/${slug}/`).pipe(
            catchError(() => {
                return of(undefined);
            })
        );
    }

    me(): Observable<AssetList> {
        return this.http.get<AssetList>('/api/v1/asset/me/');
    }


}
