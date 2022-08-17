import { Observable } from "rxjs";
import { AssetCours, AssetCoursDetail, AssetCoursList, AssetCoursSession, CreateAssetCoursForm, UpdateAssetCourForm } from "./asset-cours";


export abstract class AssetCoursProvider {

    abstract get(): Observable<AssetCoursList>;

    abstract getByName(name: string): Observable<AssetCoursDetail>;

    abstract getSession(name: string): Observable<AssetCoursSession>;

    abstract create(form: CreateAssetCoursForm): Observable<AssetCours>;

    abstract update(form: UpdateAssetCourForm): Observable<AssetCoursDetail>;

}
