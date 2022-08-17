import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AssetCours, AssetCoursDetail, AssetCoursList, AssetCoursSession, CreateAssetCoursForm, UpdateAssetCourForm } from "../models/asset-cours";
import { AssetCoursProvider } from "../models/asset-cours-provider";

@Injectable({ providedIn: 'root' })
export class AssetCoursService {
    constructor(
        private readonly provider: AssetCoursProvider
    ) { }

    get(): Observable<AssetCoursList> {
        return this.provider.get();
    }

    getByName(name: string): Observable<AssetCoursDetail> {
        return this.provider.getByName(name);
    }

    getSession(name: string): Observable<AssetCoursSession> {
        return this.provider.getSession(name);
    }

    create(form: CreateAssetCoursForm): Observable<AssetCours> {
        return this.provider.create(form);
    }

    update(form: UpdateAssetCourForm): Observable<AssetCoursDetail> {
        return this.provider.update(form);
    }

}
