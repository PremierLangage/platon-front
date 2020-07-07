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
        private readonly changeDetector: ChangeDetectorRef
    ) {}

    onAfterSerialize(state: TextInput) {
        // state validation logic goes here
        return state;
    }

    onAfterDeserialize() {
        this.changeDetector.detectChanges();
    }
}
