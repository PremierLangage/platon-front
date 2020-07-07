import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { WebComponent, WebComponentEvents } from '../web-components';
import { TextInput, TextInputComponentDefinition } from './text-input';

@Component({
    selector: 'wc-text-input',
    templateUrl: 'text-input.component.html',
    styleUrls: ['text-input.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
@WebComponent(TextInputComponentDefinition)
export class TextInputComponent implements WebComponentEvents<TextInput> {
    @Input() state!: TextInput;

    constructor(
        readonly changeDetector: ChangeDetectorRef,
    ) {}

    onAfterDeserialize() {
        this.changeDetector.detectChanges();
    }

}

