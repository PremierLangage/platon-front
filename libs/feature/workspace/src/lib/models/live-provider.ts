import { Observable } from "rxjs";
import { Live } from "./live";


export abstract class LiveProvider {

    abstract build(id: number): Observable<Live>;

    abstract get(id: number, session: string): Observable<Live>;

}
