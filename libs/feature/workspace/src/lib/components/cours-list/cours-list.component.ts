import { Component, Input } from "@angular/core";
import { AssetList } from "../../models/asset";


@Component({
    selector: 'ws-cours-list',
    templateUrl: './cours-list.component.html',
    styleUrls: ['./cours-list.component.scss']
})
export class CoursListComponent {

    @Input() items!: AssetList;

}
