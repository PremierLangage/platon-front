import { Component, OnInit } from '@angular/core';
import { AuthService, AuthUser } from '@platon/core/auth';

import { CourseService } from '../course/course.service';
import { Course } from '../course/course.service'

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  providers: [CourseService],
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
    user?: AuthUser;
    courses: Course[] = []

    constructor(
        public courseService: CourseService,
        private readonly authService: AuthService,
    ) { }

    async ngOnInit(): Promise<void> {
        this.user = await this.authService.ready();
        this.courseService.getCourses()
            .then(response => {
                if(response){
                    this.courses = response.courses;
                }
            })
            .catch(error => console.error(error));
    };

    courseChosen(course: any) {
        return course.id;
    }

    addCourse(course: Course) : void {
        this.courses.push(course);
    }
}
