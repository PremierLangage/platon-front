import { Component, OnInit } from '@angular/core';

import { CourseService } from '../course/course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  providers: [CourseService],
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
    courses: any[] = [];

    constructor(public courseService: CourseService) {
    }

    async ngOnInit() {
        // this.courses = await this.courseService.loadCourses().toPromise();
    }

    courseChosen(course: any) {
        return course.id;
    }
}
