import { ChangeDetectionStrategy, Injector, Component, Input, ViewChild, EventEmitter, Output } from '@angular/core';
import { WebComponent, WebComponentHooks } from '../../web-component';
import { PlatonViewerComponentDefinition, PlatonViewerState } from './platon-viewer';
import { PlatonViewerHandler } from './platon-viewer.directive';

@Component({
    selector: 'wc-platon-viewer',
    templateUrl: 'platon-viewer.component.html',
    styleUrls: ['platon-viewer.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
@WebComponent(PlatonViewerComponentDefinition)
export class PlatonViewerComponent implements WebComponentHooks<PlatonViewerState> {
    /**
     * The state of the component.
     * The @WebComponent decorator create a getter and a setter during runtime to
     * synchronize the changes and call the methods `onAfterSerialize` (after the getter runs)
     * and `onAfterDeserialize` (after the setter runs).
     */
    @Input() state!: PlatonViewerState;

    @ViewChild(PlatonViewerHandler) component !: PlatonViewerHandler;

    private _componentState: any = {};
    @Output() componentStateChange: EventEmitter<Record<string, any>> = new EventEmitter<Record<string, any>>();

    @Input()
    set componentState(state: any) {
        this._componentState = this.component.getComponentState();
        this.componentStateChange.emit(this._componentState);
    }

    get componentState(): any {
        this._componentState = this.component.getComponentState();
        return this._componentState;
    }

    loaded: boolean = false;

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
    onGetState(state: PlatonViewerState) {
        this.loaded = true;
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
