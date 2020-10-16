import { ChangeDetectionStrategy, Injector, Component, Input } from '@angular/core';
import { WebComponent, WebComponentHooks } from '../../web-components';
import { GraphViewer, GraphViewerComponentDefinition } from './graph-viewer';

@Component({
    selector: 'wc-graph-viewer',
    templateUrl: 'graph-viewer.component.html',
    styleUrls: ['graph-viewer.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
@WebComponent(GraphViewerComponentDefinition)
export class GraphViewerComponent implements WebComponentHooks<GraphViewer> {
    @Input() state!: GraphViewer;
    constructor(
        readonly injector: Injector
    ) {}
}
