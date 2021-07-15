import { Component } from '@angular/core';
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
    constructor() {}

    ngOnInit(): void {};

    onSubmit() {
        this.submitted = true;
    }


}
