import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { throwError } from 'rxjs';
import { map,catchError } from 'rxjs/operators';

@Injectable()
export class CourseListService {

constructor(private readonly http: HttpClient) { }

ROOT_URL = '/api/v1/course/';

loadCourses() {
    return this.http.get<any[]>(this.ROOT_URL).pipe(
        map((response: any) => response.courses)
    );
}

}
