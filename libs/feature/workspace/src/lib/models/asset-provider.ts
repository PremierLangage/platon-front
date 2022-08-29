import { Observable } from "rxjs";
import { Asset, AssetList, CreateAssetForm } from "./asset";


export abstract class AssetProvider {

    abstract get(): Observable<AssetList>;

    abstract getByPath(path: string[]): Observable<Asset>;

    abstract create(form: CreateAssetForm): Observable<Asset>;

}
