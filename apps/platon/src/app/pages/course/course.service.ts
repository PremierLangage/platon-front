import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError } from "rxjs/operators";

import { HttpClient, HttpResponse } from '@angular/common/http';

import { Activity } from '../activity/activity.service'
import { Asset, Settings } from '../assets/assets.model';


@Injectable()
export class CourseService {
    constructor(private readonly http: HttpClient) {}

    ROOT_URL = '/api/v1/courses/1';

    /**
     * Get course detail with id 'id'x
     * @param id
     */
    getCourse(id: number): Promise<CourseDetail | undefined> {
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
    createCourse(course_name: string, description: string, opening: any, closing: any): Promise<Course | undefined> {
        console.log("create");
        console.log("opening : " + opening);
        console.log("closing : " + closing);
        return this.http.post<Course>('/api/v1/courses/', {
            "name": course_name,
            "desc": description,
            "sandbox_name": "default_sandbox",
            "opening": opening,
            "closing": closing,
          }).pipe(
                catchError(() => {
                    return of(undefined);
                })
            ).toPromise();
    }
}

export class Course implements Asset {
    id?: number;
    name!: string;
    desc!: string;
    opening!:   string;
    closing!:   string;

    constructor() {
        this.name = "";
        this.desc = "";
        this.opening = "";
        this.closing = "";
    }
}

export interface CourseDetail extends Asset {
    sandbox:   number;
    settings:  Settings;
    activities: Activity[];
}

export interface Courses {
    courses: Course[];
}

