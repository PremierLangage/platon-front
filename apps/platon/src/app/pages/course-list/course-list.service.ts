import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable()
export class CourseListService {

constructor(private readonly http: HttpClient) { }

ROOT_URL = '/api/v1/courses/';

loadCourses() {
    return this.http.get<any[]>(this.ROOT_URL).pipe(
        map((response: any) => response.courses)
    );
}

}
