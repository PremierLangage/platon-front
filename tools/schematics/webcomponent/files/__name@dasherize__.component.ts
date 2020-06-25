import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { WebComponent, WebComponentLifeCycles } from '../components';
import { <%= classify(name) %> } from './<%= name %>';

@Component({
    selector: '<%= name %>',
    templateUrl: '<%= name %>.component.html',
    styleUrls: ['<%= name %>.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
@WebComponent({
    name: '<%= classify(name) %>',
    icon: '<%= name %>.svg',
    selector: 'platon-<%= name %>',
    description: '...',
    properties: {
        // PROPERTY_NAME: { name: 'PROPERTY_NAME', 'type': 'string', default: '', description: '' }
        // ...
    }
})
export class <%= classify(name) %>Component implements WebComponentLifeCycles<<%= classify(name) %>> {

    @Input() state!: <%= classify(name) %>;

    constructor(
        private readonly changeDetector: ChangeDetectorRef
    ) {}

    onAfterSerialize(state: <%= classify(name) %>) {
        // state validation logic goes here
        return state;
    }

    onAfterDeserialize() {
        this.changeDetector.detectChanges();
    }
}
