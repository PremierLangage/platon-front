import { Observable } from "rxjs";
import { Live, LiveAction } from "./live";


export abstract class LiveProvider {

    abstract build(id: number): Observable<LiveAction>;

    abstract retrieve(id: number, env: string, path: string): Observable<Live>;

    abstract grade(id: number, env: string, form: Record<string, any>): Observable<LiveAction>;

}
