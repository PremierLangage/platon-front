import { ChangeDetectionStrategy, Injector, Component, Input, ChangeDetectorRef } from '@angular/core';
import { WebComponent, WebComponentHooks } from '../../web-component';
import { AssetCoursViewerComponentDefinition, AssetCoursViewerState } from './asset-cours-viewer';

@Component({
    selector: 'wc-asset-cours-viewer',
    templateUrl: 'asset-cours-viewer.component.html',
    styleUrls: ['asset-cours-viewer.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
@WebComponent(AssetCoursViewerComponentDefinition)
export class AssetCoursViewerComponent implements WebComponentHooks<AssetCoursViewerState> {

    @Input() state!: AssetCoursViewerState;

    constructor(
        readonly injector: Injector,
        private readonly changeDetectorRef: ChangeDetectorRef,
    ) {}

    onGetState(state: AssetCoursViewerState) {
        return state;
    }

    onChangeState() {
    }

}
