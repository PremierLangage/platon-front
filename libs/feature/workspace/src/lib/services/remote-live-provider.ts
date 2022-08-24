import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Live } from "../models/live";
import { LiveProvider } from "../models/live-provider";


@Injectable()
export class RemoteLiveProvider extends LiveProvider {

    constructor(
        private readonly http: HttpClient
    ) {
        super();
    }

    get(id: number): Observable<Live> {
        return this.http.get<Live>(`/api/v1/live/resource/${id}/`);
    }

}
