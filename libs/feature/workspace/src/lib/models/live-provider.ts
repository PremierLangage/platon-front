import { Observable } from "rxjs";
import { Live } from "./live";


export abstract class LiveProvider {

    abstract get(id: number): Observable<Live>;

}
