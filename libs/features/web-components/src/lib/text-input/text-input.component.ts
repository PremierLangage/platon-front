import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { WebComponent, WebComponentEvents } from '../web-components';
import { TextInput } from './text-input';

@Component({
    selector: 'wc-text-input',
    templateUrl: 'text-input.component.html',
    styleUrls: ['text-input.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
@WebComponent({
    name: 'TextInput',
    icon: 'input.svg',
    selector: 'wc-input',
    description: 'Inputs provides a way for users to enter a data.',
    properties: {
        value: { name: 'value', 'type': 'string', default: '', description: '' }
    }
})
export class TextInputComponent implements WebComponentEvents<TextInput> {
    @Input() state!: TextInput;

    constructor(
        private readonly changeDetector: ChangeDetectorRef
    ) {}

    onAfterDeserialize() {
        this.changeDetector.detectChanges();
    }

}
