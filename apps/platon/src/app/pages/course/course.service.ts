import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable()
export class CourseService {
    constructor(private readonly http: HttpClient) {}

    ROOT_URL = '/api/v1/course/1';

    loadActivities(): Observable<HttpResponse<Course>> {
        return this.http.get<Course>(this.ROOT_URL, { observe: 'response' });
    }
}
export interface Course {
    name: string;
    id: number;
    activities: any[];
}
