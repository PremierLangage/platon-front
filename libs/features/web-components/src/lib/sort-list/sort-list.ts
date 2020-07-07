import { defineWebComponent, WebComponentModel } from '../web-components';

export interface SortList extends WebComponentModel {
  myproperty: string;
}

export const SortListComponentDefinition = defineWebComponent({
    name: 'SortList',
    icon: 'default.svg',
    selector: 'wc-sort-list',
    description: '...',
    properties: {
        myproperty: { name: 'myproperty', 'type': 'string', default: '', description: '' }
        // ...
    }
});
