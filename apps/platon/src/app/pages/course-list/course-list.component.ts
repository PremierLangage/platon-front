import { Component, OnInit } from '@angular/core';

import { CourseService } from '../course/course.service';
import { Course } from '../course/course.service'
import { Courses } from '../course/course.service'

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  providers: [CourseService],
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
    courses: Course[] = []


    constructor(public courseService: CourseService) {
    }

    ngOnInit(): void {
        this.courseService.getCourses()
            .then(response => {
                if(response){
                    this.courses = response.courses;
                }

            })
            .then(response => {console.log("Get DATA")})
            .catch(error => console.error(error));

    };


    courseChosen(course: any) {
        return course.id;
    }
}
