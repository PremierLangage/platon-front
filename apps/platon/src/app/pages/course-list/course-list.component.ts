import { Component, OnInit } from '@angular/core';
import introJs from 'intro.js';
import { InvertByPipe } from 'ngx-pipes';

import { CourseListService } from './course-list.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  providers: [CourseListService],
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
    courses: any[] = [];

    constructor(public courselistService: CourseListService) {
    }

    async ngOnInit() {
        this.courses = await this.courselistService.loadCourses().toPromise();
    }

    courseChosen(course: any) {
        return course.id;
    }
}
