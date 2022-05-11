import { Observable } from 'rxjs';
import { Asset } from './asset';

export abstract class AssetProvider {
    abstract createAsset(): Observable<Asset>;
}
