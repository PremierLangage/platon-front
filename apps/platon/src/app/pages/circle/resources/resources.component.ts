import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-circle-resources',
    templateUrl: './resources.component.html',
    styleUrls: ['./resources.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResourcesComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}
