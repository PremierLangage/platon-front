import { Observable } from "rxjs";
import { Asset, AssetList } from "./asset";


export abstract class AssetProvider {

    abstract get(): Observable<AssetList>;

    abstract getByPath(path: string[]): Observable<Asset>;

}
