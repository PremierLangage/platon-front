import { defineWebComponent, WebComponentModel } from '../web-components';

export interface <%= classify(name) %> extends WebComponentModel {
  myproperty: string;
}

export const <%= classify(name) %>ComponentDefinition = defineWebComponent({
    name: '<%= classify(name) %>',
    icon: 'default.svg',
    selector: 'wc-<%= name %>',
    description: '...',
    properties: {
        myproperty: { name: 'myproperty', 'type': 'string', default: '', description: '' }
        // ...
    }
});
