import { Component, OnInit } from '@angular/core';

import { courses } from '../../../exercises/course.json';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  courses = courses;

}
