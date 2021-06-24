import { Component, OnInit } from '@angular/core';

import { courses } from '../../exercises/course.json';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {

    public activities;

    constructor() {
        this.activities = courses;
    }

    ngOnInit() {
        console.log(this.activities);
    }


}
