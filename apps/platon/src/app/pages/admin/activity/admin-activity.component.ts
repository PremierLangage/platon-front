import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";


@Component({
    selector: 'app-admin-activity',
    templateUrl: './admin-activity.component.html',
    styleUrls: ['./admin-activity.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminActivityComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {

    }

}
