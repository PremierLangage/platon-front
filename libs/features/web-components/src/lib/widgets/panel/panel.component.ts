import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { WebComponent, WebComponentState } from '../../web-components';
import { Panel, PanelComponentDefinition } from './panel';

@Component({
    selector: 'wc-panel',
    templateUrl: 'panel.component.html',
    styleUrls: ['panel.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
@WebComponent(PanelComponentDefinition)
export class PanelComponent implements WebComponentState<Panel> {
    /**
     * The state of the component.
     * The @WebComponent decorator create a getter and a setter during runtime to
     * synchronize the changes and call the methods `onAfterSerialize` (after the getter runs)
     * and `onAfterDeserialize` (after the setter runs).
     */
    @Input() state!: Panel;

    constructor(
        private readonly changeDetector: ChangeDetectorRef
    ) {}

    /**
     * This method is called immediately after the `state` getter runs with the object that
     * will be returned by the getter.
     * Define this method to handle any additional post validation tasks.
     *
     * @param state The object that will be returned by the getter.
     * @returns the object or a computed version of the object.
     */
    onAfterSerialize(state: Panel) {
        return state;
    }

    /**
     * A callback method that is invoked immediately after the `state` setter runs.
     * Define this method to handle any additional validation and initialization tasks.
     *
     * Remark:
     * You may need to run Angular change detection at the end of this method
     * to refresh the view.
     */
    onAfterDeserialize() {
        this.changeDetector.detectChanges();
    }

    toggle() {
        if (this.state.expandable) {
            this.state.expanded = !this.state.expanded;
        }
    }
}
