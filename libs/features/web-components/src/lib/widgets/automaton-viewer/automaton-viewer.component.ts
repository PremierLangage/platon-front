import { ChangeDetectionStrategy, Component, Injector, Input } from '@angular/core';
import { automatonToDotFormat, parseAutomaton } from '../../forms/automaton-editor/automaton';
import { WebComponent, WebComponentHooks } from '../../web-components';
import { AutomatonViewer, AutomatonViewerComponentDefinition } from './automaton-viewer';

@Component({
    selector: 'wc-automaton-viewer',
    templateUrl: 'automaton-viewer.component.html',
    styleUrls: ['automaton-viewer.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
@WebComponent(AutomatonViewerComponentDefinition)
export class AutomatonViewerComponent implements WebComponentHooks<AutomatonViewer> {
    @Input() state!: AutomatonViewer;

    dot?: string;

    constructor(
        readonly injector: Injector
    ) {}

    onChangeState() {
        this.dot = automatonToDotFormat(
            parseAutomaton(this.state.automaton)
        );
    }

}
