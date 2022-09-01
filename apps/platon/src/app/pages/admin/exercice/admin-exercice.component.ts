import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";


@Component({
    selector: 'app-admin-exercice',
    templateUrl: './admin-exercice.component.html',
    styleUrls: ['./admin-exercice.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminExerciceComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {

    }

}
