import { ChangeDetectionStrategy, Injector, Component, Input } from '@angular/core';
import { WebComponent, WebComponentHooks } from '../../web-components';
import { Jsx, JsxComponentDefinition } from './jsx';

@Component({
    selector: 'wc-jsx',
    templateUrl: 'jsx.component.html',
    styleUrls: ['jsx.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
@WebComponent(JsxComponentDefinition)
export class JsxComponent implements WebComponentHooks<Jsx> {
    /**
     * The state of the component.
     * The @WebComponent decorator create a getter and a setter during runtime to
     * synchronize the changes and call the methods `onAfterSerialize` (after the getter runs)
     * and `onAfterDeserialize` (after the setter runs).
     */
    @Input() state!: Jsx;

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
    onGetState(state: Jsx) {
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
