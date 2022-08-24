import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CoursDetail, CoursList, UpdateCoursForm } from "../models/cours";
import { CoursProvider } from "../models/cours-provider";


@Injectable({ providedIn: 'root' })
export class CoursService {

    constructor (
        private readonly provider: CoursProvider
    ) { }

    get(): Observable<CoursList> {
        return this.provider.get();
    }

    getByName(name: string): Observable<CoursDetail> {
        return this.provider.getByName(name);
    }

    update(form: UpdateCoursForm): Observable<CoursDetail> {
        return this.provider.update(form);
    }

}
