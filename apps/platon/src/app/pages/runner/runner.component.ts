import { Component, OnInit } from '@angular/core';
import { RunnerPresenter } from './runner.presenter';

@Component({
    selector: 'app-runner',
    templateUrl: './runner.component.html',
    styleUrls: ['./runner.component.scss'],
    providers: [RunnerPresenter],
})
export class RunnerComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
