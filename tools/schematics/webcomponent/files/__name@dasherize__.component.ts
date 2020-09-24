import { ChangeDetectionStrategy, Injector, Component, Input } from '@angular/core';
import { WebComponent, WebComponentHooks } from '../../web-components';
import { <%= classify(name) %>, <%= classify(name) %>ComponentDefinition } from './<%= name %>';

@Component({
    selector: 'wc-<%= name %>',
    templateUrl: '<%= name %>.component.html',
    styleUrls: ['<%= name %>.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
@WebComponent(<%= classify(name) %>ComponentDefinition)
export class <%= classify(name) %>Component implements WebComponentHooks<<%= classify(name) %>> {
    /**
     * The state of the component.
     * The @WebComponent decorator create a getter and a setter during runtime to
     * synchronize the changes and call the methods `onAfterSerialize` (after the getter runs)
     * and `onAfterDeserialize` (after the setter runs).
     */
    @Input() state!: <%= classify(name) %>;

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
    onGetState(state: <%= classify(name) %>) {
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
    onSetState() {
        this.changeDetector.detectChanges();
    }

}
