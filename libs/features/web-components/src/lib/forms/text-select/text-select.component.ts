import { ChangeDetectionStrategy, Injector, Component, Input } from '@angular/core';
import { WebComponent, WebComponentHooks } from '../../web-components';
import { TextSelect, TextSelectComponentDefinition } from './text-select';

@Component({
    selector: 'wc-text-select',
    templateUrl: 'text-select.component.html',
    styleUrls: ['text-select.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
@WebComponent(TextSelectComponentDefinition)
export class TextSelectComponent implements WebComponentHooks<TextSelect> {
    /**
     * The state of the component.
     * The @WebComponent decorator create a getter and a setter during runtime to
     * synchronize the changes and call the methods `onAfterSerialize` (after the getter runs)
     * and `onAfterDeserialize` (after the setter runs).
     */
    @Input() state!: TextSelect;

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
    onGetState(state: TextSelect) {
        return state;
    }

    /**
     * A callback method that is invoked immediately after the `state` setter runs.
     * Define this method to handle any additional validation and initialization tasks.
     *
     */
    onSetState() {
    }

}