import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output, ViewChild } from "@angular/core";
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
    set asset(value: Record<string, any>) {
        this.content = value;
        this.changeDetectorRef.markForCheck();
    }

    @Output() getState = new EventEmitter<Record<string, any>>();

    constructor(
        private readonly changeDetectorRef: ChangeDetectorRef,
    ) { }

    submit() {
        this.getState.emit(this.form.content);
    }

}
