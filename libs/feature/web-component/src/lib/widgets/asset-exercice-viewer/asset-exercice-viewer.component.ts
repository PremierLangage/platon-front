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
    /**
     * The state of the component.
     * The @WebComponent decorator create a getter and a setter during runtime to
     * synchronize the changes and call the methods `onAfterSerialize` (after the getter runs)
     * and `onAfterDeserialize` (after the setter runs).
     */
    @Input() state!: AssetExerciceViewerState;

    constructor(
        readonly injector: Injector
    ) {}

    /**
     * This method is called immediately after the `state` getter runs with the object that
     * will be returned by the getter.
     * Define this method to handle any additional post validation tasks.
     *
     * @param state The state that will be returned by the getter.
     * @returns the state or a computed version of the state.
     */
    onGetState(state: AssetExerciceViewerState) {
        return state;
    }

    /**
     * A callback method that is invoked immediately after the `state` setter runs.
     * Define this method to handle any additional validation and initialization tasks.
     *
     * Remarks:
     * - `ngOnInit` hook is always called before this one.
     * - change detector is triggered right after the end of this method refresh the view.
     */
    onChangeState() {
    }

}
