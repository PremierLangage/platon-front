import { Component, OnInit } from '@angular/core';
import { ActivityPresenter } from '../activity-presenter';

@Component({
    selector: 'app-a1',
    templateUrl: './a1.component.html',
    styleUrls: ['./a1.component.scss']
})
export class A1Component implements OnInit {

    currentExercise = 0;

    constructor(
        readonly presenter: ActivityPresenter
    ) { }

    ngOnInit() {
    }

}
