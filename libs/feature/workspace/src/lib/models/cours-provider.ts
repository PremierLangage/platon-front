import { Observable } from "rxjs";
import { CoursList, CoursDetail, UpdateCoursForm } from "./cours";


export abstract class CoursProvider {

    abstract get(): Observable<CoursList>;

    abstract getByName(name: string): Observable<CoursDetail>;

    abstract update(form: UpdateCoursForm): Observable<CoursDetail>;

}
