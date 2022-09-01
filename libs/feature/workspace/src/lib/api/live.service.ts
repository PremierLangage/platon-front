import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Live } from "../models/live";
import { LiveProvider } from "../models/live-provider";


@Injectable({ providedIn: 'root' })
export class LiveService {

    constructor(
        private readonly provider: LiveProvider
    ) { }

    build(id: number): Observable<Live> {
        return this.provider.build(id);
    }

    get(id: number, session: string): Observable<Live> {
        return this.provider.get(id, session);
    }

}
