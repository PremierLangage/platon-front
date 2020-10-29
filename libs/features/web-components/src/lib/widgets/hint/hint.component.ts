import { ChangeDetectionStrategy, Component, Injector, Input } from '@angular/core';
import { WebComponent, WebComponentHooks } from '../../web-components';
import { HintComponentDefinition, HintState } from './hint';

@Component({
    selector: 'wc-hint',
    templateUrl: 'hint.component.html',
    styleUrls: ['hint.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
@WebComponent(HintComponentDefinition)
export class HintComponent implements WebComponentHooks<HintState> {
    /**
     * The state of the component.
     * The @WebComponent decorator create a getter and a setter during runtime to
     * synchronize the changes and call the methods `onAfterSerialize` (after the getter runs)
     * and `onAfterDeserialize` (after the setter runs).
     */
    @Input() state!: HintState;

    constructor(
        readonly injector: Injector
    ) {}

    /**
     * This method is called immediately after the `state` getter runs with the object that
     * will be returned by the getter.
     * Define this method to handle any additional post validation tasks.
     *
     * @param state The object that will be returned by the getter.
     * @returns the object or a computed version of the object.
     */
    onGetState(state: HintState) {
        return state;
    }

    /**
     * A callback method that is invoked immediately after the `state` setter runs.
     * Define this method to handle any additional validation and initialization tasks.
     *
     */
    onChangeState() {
    }

}
