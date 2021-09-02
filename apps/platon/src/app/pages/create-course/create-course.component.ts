import { Component, EventEmitter, Output } from '@angular/core';
import { CourseService, Course } from '../course/course.service'


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
    @Output() course = new EventEmitter<Course>();

    constructor(public courseService: CourseService) {}

    ngOnInit() {
    }

    onSubmit() {
        this.submitted = true;
        if(this.name && this.desc && this.sandbox_name){
            this.courseService.createCourse(this.name.trim(), this.desc.trim(), this.sandbox_name.trim())
                .then(response => {
                    if(response){
                        this.course.emit(response)
                        console.log(response)
                        this.name = "";
                        this.desc = "";
                        this.sandbox_name = "";
                    }
                })
                .catch(error => console.error(error));
        }
    }
}
