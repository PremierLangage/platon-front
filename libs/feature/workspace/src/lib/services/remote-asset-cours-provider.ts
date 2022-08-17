import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AssetCours, AssetCoursDetail, AssetCoursList, AssetCoursSession, CreateAssetCoursForm, UpdateAssetCourForm } from "../models/asset-cours";
import { AssetCoursProvider } from "../models/asset-cours-provider";

@Injectable()
export class RemoteAssetCoursProvider extends AssetCoursProvider {

    constructor(private readonly http: HttpClient) {
        super();
    }

    get(): Observable<AssetCoursList> {
        return this.http.get<AssetCoursList>('/api/v1/asset/cours/');
    }

    getByName(name: string): Observable<AssetCoursDetail> {
        return this.http.get<AssetCoursDetail>(`/api/v1/asset/cours/${name}/`);
    }

    getSession(name: string): Observable<AssetCoursSession> {
        return this.http.get<AssetCoursSession>(`/api/v1/asset/cours/play/${name}/`);
    }

    create(form: CreateAssetCoursForm): Observable<AssetCours> {
        return this.http.post<AssetCours>(`/api/v1/asset/cours/`, form);
    }

    update(form: UpdateAssetCourForm): Observable<AssetCoursDetail> {
        return this.http.patch<AssetCoursDetail>(`/api/v1/asset/cours/${form.name}/`, {
            //name: form.name,
            description: form.description,
            content: form.content
        });
    }

}
