import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { WebComponent, WebComponentLifeCycles } from '../components';
import { PlatonInput } from './platon-input';

@Component({
    selector: 'platon-input',
    templateUrl: 'platon-input.component.html',
    styleUrls: ['platon-input.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
@WebComponent({
    name: 'Input',
    icon: 'input.svg',
    selector: 'platon-input',
    description: 'Inputs provides a way for users to enter a data.',
    properties: {
        value: { name: 'value', 'type': 'string|number', default: '', description: '' }
    }
})
export class PlatonInputComponent implements WebComponentLifeCycles<PlatonInput> {
    @Input() state!: PlatonInput;

    constructor(
        private readonly changeDetector: ChangeDetectorRef
    ) {}

    onAfterDeserialize() {
        this.changeDetector.markForCheck();
    }
}
