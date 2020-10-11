import { ChangeDetectionStrategy, Injector, Component, Input } from '@angular/core';
import { WebComponent, WebComponentHooks } from '../../web-components';
import { CheckboxGroup, CheckboxGroupComponentDefinition, CheckboxItem } from './checkbox-group';

@Component({
    selector: 'wc-checkbox-group',
    templateUrl: 'checkbox-group.component.html',
    styleUrls: ['checkbox-group.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
@WebComponent(CheckboxGroupComponentDefinition)
export class CheckboxGroupComponent implements WebComponentHooks<CheckboxGroup> {
    @Input() state!: CheckboxGroup;

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
                    checked: false,
                }
            }
            if (item.checked == null) {
                item.checked = false;
            }
        });
    }

    onDidCheckboxChange(event: Event, item: CheckboxItem) {
        event.preventDefault();
        event.stopPropagation();
        item.checked = !item.checked;
    }

    trackBy(index: number, item: CheckboxItem) {
        return item.content || index;
    }

}
