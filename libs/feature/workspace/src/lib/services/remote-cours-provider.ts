import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CoursList, CoursDetail, UpdateCoursForm } from "../models/cours";
import { CoursProvider } from "../models/cours-provider";


@Injectable()
export class RemoteCoursProvider extends CoursProvider {

    constructor(private readonly http: HttpClient) {
        super();
    }

    get(): Observable<CoursList> {
        return this.http.get<CoursList>('/api/v1/asset/cours');
    }
    getByName(name: string): Observable<CoursDetail> {
        return this.http.get<CoursDetail>(`/api/v1/asset/cours/${name}/`);
    }

    update(form: UpdateCoursForm): Observable<CoursDetail> {
        return this.http.patch<CoursDetail>(`/api/v1/asset/cours/${form.asset.name}/`, {
            description: form.description,
            content: form.content
        });
    }


}
