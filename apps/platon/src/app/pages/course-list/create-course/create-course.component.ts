import { Component } from '@angular/core';
import { CourseService } from '../../course/course.service'
import { Course } from '../../course/course.service'
import { Courses } from '../../course/course.service'


@Component({
    selector: 'app-create-course',
    templateUrl: './create-course.component.html',
    styleUrls: ['./create-course.component.scss'],
})

export class CreateCourseComponent {
    submitted = false;
    name!: string;
    desc!: string;
    sandbox_name!: string;
    courses: Course[] = []

    constructor(public courseService: CourseService) {}

    ngOnInit(): void {
        this.courseService.getCourses()
            .then(response => {
                if(response){
                    this.courses = response.courses
                }
            })
            .then(response => {console.log("Get DATA")})
            .catch(error => console.error(error));

    };

    onSubmit() {
        this.submitted = true;
        if(this.name  && this.desc  && this.sandbox_name){
            this.courseService.createCourse(this.name.trim(), this.desc.trim(), this.sandbox_name.trim())
                .then(response => {
                    if(response){
                        console.log(response)
                    }
                })
                .then(response => {console.log("log log")})
                .catch(error => console.error(error));
        }
    }


}
