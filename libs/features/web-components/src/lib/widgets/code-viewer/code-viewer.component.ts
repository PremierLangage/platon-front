import { ChangeDetectionStrategy, Component, Injector, Input } from '@angular/core';
import { WebComponent, WebComponentHooks } from '../../web-components';
import { CodeViewer, CodeViewerComponentDefinition } from './code-viewer';

@Component({
    selector: 'wc-code-viewer',
    templateUrl: 'code-viewer.component.html',
    styleUrls: ['code-viewer.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
@WebComponent(CodeViewerComponentDefinition)
export class CodeViewerComponent implements WebComponentHooks<CodeViewer> {
    @Input() state!: CodeViewer;
    constructor(
        readonly injector: Injector,
    ) {}
}
