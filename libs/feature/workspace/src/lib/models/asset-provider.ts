import { Observable } from "rxjs";
import { Asset, AssetList, UpdateAssetForm } from "./asset";



export abstract class AssetProvider {

    abstract get(): Observable<AssetList>;

    abstract patch(form: UpdateAssetForm): Observable<any>;

    abstract getLive(id: number): Observable<Asset>;

    abstract getAssetByPath(path: string): Observable<Asset>;

    abstract getRunnbleAssetByPath(path: string): Observable<any>;

    abstract me(): Observable<AssetList>;

}
