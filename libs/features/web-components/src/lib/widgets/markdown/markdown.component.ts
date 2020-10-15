import { ChangeDetectionStrategy, Injector, Component, Input } from '@angular/core';
import { WebComponent, WebComponentHooks } from '../../web-components';
import { Markdown, MarkdownComponentDefinition } from './markdown';

@Component({
    selector: 'wc-markdown',
    templateUrl: 'markdown.component.html',
    styleUrls: ['markdown.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
@WebComponent(MarkdownComponentDefinition)
export class MarkdownComponent implements WebComponentHooks<Markdown> {
    @Input() state!: Markdown;
    constructor(
        readonly injector: Injector
    ) {}
}
