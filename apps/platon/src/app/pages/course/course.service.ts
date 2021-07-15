import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from "rxjs/operators";

import { HttpClient, HttpResponse } from '@angular/common/http';

import { map } from 'rxjs/operators';


@Injectable()
export class CourseService {
    constructor(private readonly http: HttpClient) {}

    ROOT_URL = '/api/v1/courses/';

    loadActivities(): Observable<HttpResponse<Course>> {
        console.log('loadActivity')
        return this.http.get<Course>(this.ROOT_URL, { observe: 'response' });
    }

    getCoursesL():  Observable<Course | undefined> {
        console.log('loadCourses')
        return this.http.get<any[]>(this.ROOT_URL).pipe(
            map((response: any) => response.courses)
        );
    }

    getCourses(): Promise<Courses | undefined> {
        return this.http.get<Courses>('/api/v1/courses/').pipe(
                catchError(() => {
                    return of(undefined);
                })
            ).toPromise();
    }


    createCoursesss(course_name: string, description: string, sandbox_name: string): Observable<Course | undefined> {
        return this.http.post<Course>('/api/v1/courses/', {
            "name": course_name,
            "desc": description,
            "sandbox_name": sandbox_name
          }).pipe(
                catchError(() => {
                    return of(undefined);
                })
            );
    }

    createCourse(course_name: string, description: string, sandbox_name: string): Promise<Course | undefined> {
        return this.http.post<Course>('/api/v1/courses/', {
            "name": course_name,
            "desc": description,
            "sandbox_name": sandbox_name
          }).pipe(
                catchError(() => {
                    return of(undefined);
                })
            ).toPromise();
    }
}

export interface Course {
    id: number;
    name: string;
    desc: string;
    status: string;
}

export interface Courses {
    courses: Course[];
}

