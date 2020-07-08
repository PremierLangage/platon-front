import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { WebComponent, WebComponentEvents } from '../../web-components';
import { Panel, PanelComponentDefinition } from './panel';

@Component({
    selector: 'wc-panel',
    templateUrl: 'panel.component.html',
    styleUrls: ['panel.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
@WebComponent(PanelComponentDefinition)
export class PanelComponent implements  WebComponentEvents<Panel> {
    @Input() state!: Panel;

    constructor(
        private readonly changeDetector: ChangeDetectorRef
    ) {}

    onAfterDeserialize() {
        this.changeDetector.detectChanges();
    }

    toggle() {
        if (this.state.expandable) {
            this.state.expanded = !this.state.expanded;
        }
    }
}
