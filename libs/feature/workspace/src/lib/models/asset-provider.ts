import { Observable } from "rxjs";
import { Asset, AssetList } from "./asset";



export abstract class AssetProvider {

    abstract get(): Observable<AssetList>;

    abstract findBySlug(slug: string): Observable<Asset | undefined>;

    abstract me(): Observable<AssetList>;

}
