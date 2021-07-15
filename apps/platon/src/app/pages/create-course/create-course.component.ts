import { Component } from '@angular/core';

import { Inject } from '@angular/core';

@Component({
    selector: 'app-create-course',
    templateUrl: './create-course.component.html',
    styleUrls: ['./create-course.component.scss'],
})

export class CreateCourseComponent {
    submitted = false;

    constructor(
        @Inject(String) public name: string,
        @Inject(String) public desc: string,
        @Inject(String) public sandbox_name: string
    ) {}

    ngOnInit(): void {};

    onSubmit() {
        this.submitted = true;
    }
}
