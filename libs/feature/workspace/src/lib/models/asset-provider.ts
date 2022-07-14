import { Observable } from "rxjs";
import { Asset, AssetList } from "./asset";



export abstract class AssetProvider {

    abstract get(): Observable<AssetList>;

    abstract getAssetByPath(path: string): Observable<Asset>;

    abstract getRunnbleAssetByPath(path: string): Observable<any>;

    abstract me(): Observable<AssetList>;

}
