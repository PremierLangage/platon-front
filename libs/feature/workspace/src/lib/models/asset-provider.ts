import { Observable } from 'rxjs';
import { Asset } from './asset';

export abstract class AssetProvider {
    abstract findById(id: number): Observable<Asset>;
}
