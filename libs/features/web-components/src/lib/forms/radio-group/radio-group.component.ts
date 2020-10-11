import { ChangeDetectionStrategy, Injector, Component, Input } from '@angular/core';
import { WebComponent, WebComponentHooks } from '../../web-components';
import { RadioGroup, RadioGroupComponentDefinition, RadioGroupItem } from './radio-group';

@Component({
    selector: 'wc-radio-group',
    templateUrl: 'radio-group.component.html',
    styleUrls: ['radio-group.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
@WebComponent(RadioGroupComponentDefinition)
export class RadioGroupComponent implements WebComponentHooks<RadioGroup> {
    @Input() state!: RadioGroup;

    constructor(
        readonly injector: Injector
    ) {}

    onSetState() {
        if (!Array.isArray(this.state.items)) {
            this.state.items = [];
        }
        this.state.items.forEach((item, index) => {
            if (typeof item === 'string') {
                item = this.state.items[index] = {
                    content: item,
                }
            }
        });
    }

    trackBy(index: number, item: RadioGroupItem) {
        return item.content || index;
    }
}
