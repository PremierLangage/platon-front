import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-workspace-circles',
    templateUrl: './circles.component.html',
    styleUrls: ['./circles.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CirclesComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}
