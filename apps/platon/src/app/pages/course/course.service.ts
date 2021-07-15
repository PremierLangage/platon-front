import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from "rxjs/operators";

import { HttpClient, HttpResponse } from '@angular/common/http';

import { map } from 'rxjs/operators';


@Injectable()
export class CourseService {
    constructor(private readonly http: HttpClient) {}

    ROOT_URL = '/api/v1/courses/1';

    /**
     * Get course detail with id 'id'x
     * @param id
     */
    getCourse(id: string): Promise<CourseDetail | undefined> {
        return this.http.get<CourseDetail>(`/api/v1/courses/${id}`).pipe(
                catchError(() => {
                    return of(undefined);
                })
            ).toPromise();
    }

    /**
     * Get all courses
     */
    getCourses(): Promise<Courses | undefined> {
        return this.http.get<Courses>('/api/v1/courses/').pipe(
                catchError(() => {
                    return of(undefined);
                })
            ).toPromise();
    }

    /**
     * Get my courses
     */
    getmyCourses(): Promise<Courses | undefined> {
        return this.http.get<Courses>('/api/v1/courses/me').pipe(
                catchError(() => {
                    return of(undefined);
                })
            ).toPromise();
    }

    /**
     * Create a course
     * @param course_name
     * @param description
     * @param sandbox_name
     */
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

export interface CourseDetail {
    id:        number;
    opening:   string;
    closing:   string;
    name:      string;
    desc:      string;
    aav:       string;
    isVisible: boolean;
    sandbox:   number;
    settings:  Settings;
    status:    string;
}

export interface Settings {
}
