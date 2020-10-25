import { ChangeDetectionStrategy, Injector, Component, Input } from '@angular/core';
import { WebComponent, WebComponentHooks } from '../../web-components';
import { Picker, PickerComponentDefinition } from './picker';

@Component({
    selector: 'wc-picker',
    templateUrl: 'picker.component.html',
    styleUrls: ['picker.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
@WebComponent(PickerComponentDefinition)
export class PickerComponent implements WebComponentHooks<Picker> {
    @Input() state!: Picker;
    constructor(
        readonly injector: Injector
    ) {}
}
