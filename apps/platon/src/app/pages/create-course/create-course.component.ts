import { Component, EventEmitter, Output } from '@angular/core';
import { DatePipe } from '@angular/common';
import { CourseService, Course, CourseDetail } from '../course/course.service'


@Component({
    selector: 'app-create-course',
    templateUrl: './create-course.component.html',
    styleUrls: ['./create-course.component.scss'],
    providers: [DatePipe],
})
export class CreateCourseComponent {
    submitted = false;
    courseCreate: Course = new Course();
    @Output() course = new EventEmitter<Course>();

    constructor(
        public courseService: CourseService,
        private datePipe: DatePipe
    ) {}

    ngOnInit() {
    }

    onSubmit() {
        this.submitted = true;
        if(this.courseCreate.name && this.courseCreate.desc && this.courseCreate.opening && this.courseCreate.closing){
            this.courseService.createCourse(this.courseCreate.name.trim(), this.courseCreate.desc.trim(), this.convertDate(this.courseCreate.opening), this.convertDate(this.courseCreate.closing))
                .then(response => {
                    if(response){
                        this.course.emit(response)
                    }
                })
                .catch(error => console.error(error));
        }
    }

    convertDate(date: string) {
        return this.datePipe.transform(date, 'dd-MM-yyyy');
    }
}
