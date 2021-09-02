import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-label',
  templateUrl: './course-label.component.html',
  styleUrls: ['./course-label.component.scss']
})
export class CourseLabelComponent implements OnInit {
    @Input() name!: string;
    @Input() desc!: string;

    constructor(
    ) { }

    ngOnInit() {
    };
}
