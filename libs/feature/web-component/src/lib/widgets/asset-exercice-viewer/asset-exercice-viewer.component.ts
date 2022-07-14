import { ChangeDetectionStrategy, Injector, Component, Input } from '@angular/core';
import { WebComponent, WebComponentHooks } from '../../web-component';
import { AssetExerciceViewerComponentDefinition, AssetExerciceViewerState } from './asset-exercice-viewer';

@Component({
    selector: 'wc-asset-exercice-viewer',
    templateUrl: 'asset-exercice-viewer.component.html',
    styleUrls: ['asset-exercice-viewer.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
@WebComponent(AssetExerciceViewerComponentDefinition)
export class AssetExerciceViewerComponent implements WebComponentHooks<AssetExerciceViewerState> {

    @Input() state!: AssetExerciceViewerState;

    constructor(
        readonly injector: Injector,
    ) {}

    onGetState(state: AssetExerciceViewerState) {
        return state;
    }

    onChangeState() {
    }

}
