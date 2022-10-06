import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Live, LiveAction } from "../models/live";
import { LiveProvider } from "../models/live-provider";


@Injectable({ providedIn: 'root' })
export class LiveService {

    constructor(
        private readonly provider: LiveProvider
    ) { }

    build(id: number): Observable<LiveAction> {
        return this.provider.build(id);
    }

    process(id: number, env: string): Observable<Live> {
        return this.provider.retrieve(id, env, 'process.json');
    }

    answers(id: number, env: string): Observable<Live> {
        return this.provider.retrieve(id, env, 'processed.json');
    }

    grade(id: number, env: string, form: Record<string, any>): Observable<LiveAction> {
        return this.provider.grade(id, env, form);
    }

}
