import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { Asset } from "libs/feature/workspace/src/lib/models/asset";


@Component({
    selector: 'app-asset-cours',
    templateUrl: './cours.component.html',
    styleUrls: ['./cours.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AssetCoursComponent {

    @Input() asset!: Asset;

}
