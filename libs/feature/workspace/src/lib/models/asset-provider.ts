import { Observable } from "rxjs";
import { Asset, AssetList } from "./asset";



export abstract class AssetProvider {

    abstract get(): Observable<AssetList>;

    abstract findBySlug(slug: string): Observable<Asset>;

    abstract me(): Observable<AssetList>;

}
