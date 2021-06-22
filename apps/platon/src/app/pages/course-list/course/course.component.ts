import { Component, OnInit } from '@angular/core';

import {name,id,activities} from '../../../exercises/AP1.json'
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

    public nom;
    public num;
    public activity_list;

    constructor() {
        this.nom = name;
        this.num = id;
        this.activity_list = activities;
    }

    ngOnInit() {

    }


}
