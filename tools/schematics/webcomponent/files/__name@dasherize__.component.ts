import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { WebComponent, WebComponentEvents } from '../web-components';
import { <%= classify(name) %> } from './<%= name %>';

@Component({
    selector: 'wc-<%= name %>',
    templateUrl: '<%= name %>.component.html',
    styleUrls: ['<%= name %>.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
@WebComponent({
    name: '<%= classify(name) %>',
    icon: 'default.svg',
    selector: 'wc-<%= name %>',
    description: '...',
    properties: {
        // myproperty: { name: 'myproperty', 'type': 'string', default: '', description: '' }
        // ...
    }
})
export class <%= classify(name) %>Component implements WebComponentEvents<<%= classify(name) %>> {

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