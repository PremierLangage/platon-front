import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Live } from "../models/live";
import { LiveProvider } from "../models/live-provider";


@Injectable({ providedIn: 'root' })
export class LiveService {

    constructor(
        private readonly provider: LiveProvider
    ) { }

    get(id: number): Observable<Live> {
        return this.provider.get(id);
    }

}
