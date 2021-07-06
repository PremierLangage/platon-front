import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import {  } from '../course-list/course-list.component';

@Injectable()
export class CourseListService {

constructor(private readonly http: HttpClient) { }

ROOT_URL = 'https://platon.dev/api/v1/course/me';

loadActivities() {
    return this.http.get(this.ROOT_URL).pipe(map(response => response));
}

}
