import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Live, LiveAction } from "../models/live";
import { LiveProvider } from "../models/live-provider";


@Injectable()
export class RemoteLiveProvider extends LiveProvider {

    constructor(
        private readonly http: HttpClient
    ) {
        super();
    }

    build(id: number): Observable<LiveAction> {
        return this.http.post<LiveAction>(`/api/v1/live/build/${id}/`, {});
    }

    retrieve(id: number, env: string, path: string): Observable<Live> {
        return this.http.get<Live>(`/api/v1/live/retrieve/${id}/${env}/${path}/`);
    }

    grade(id: number, env: string, form: Record<string, any>): Observable<LiveAction> {
        return this.http.post<LiveAction>(`/api/v1/live/grade/${id}/${env}`, {
            answers: form
        });
    }

}
