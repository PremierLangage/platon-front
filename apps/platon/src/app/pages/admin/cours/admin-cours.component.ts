import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { CardDisplay } from "@platon/shared/ui/card";


@Component({
    selector: 'app-admin-cours',
    templateUrl: './admin-cours.component.html',
    styleUrls: ['./admin-cours.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminCoursComponent implements OnInit {

    display: CardDisplay = 'list';

    constructor() { }

    ngOnInit(): void {

    }

}
