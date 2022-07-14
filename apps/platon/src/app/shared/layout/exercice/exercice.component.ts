import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild } from "@angular/core";
import { Asset } from "libs/feature/workspace/src/lib/models/asset";
import { AssetFormComponent } from "../form/form.component";

@Component({
    selector: 'app-asset-exercice',
    templateUrl: './exercice.component.html',
    styleUrls: ['./exercice.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AssetExerciceComponent {

    content!: Record<string, any>;

    @ViewChild(AssetFormComponent) form!: AssetFormComponent;

    @Input()
    set asset(value: Asset) {
        this.content = value.content;
    }

    @Output() getState = new EventEmitter<Record<string, any>>();

    submit() {
        this.getState.emit(this.form.content);
    }

}
