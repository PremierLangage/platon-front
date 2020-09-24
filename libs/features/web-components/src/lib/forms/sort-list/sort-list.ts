import { defineWebComponent, WebComponentModel, WebComponentTypes } from '../../web-components';

export interface SortList extends WebComponentModel {
  myproperty: string;
}

export const SortListComponentDefinition = defineWebComponent({
    type: WebComponentTypes.form,
    name: 'SortList',
    icon: 'default.svg',
    selector: 'wc-sort-list',
    description: 'REMPLACEZ CE TEXTE PAR UNE DESCRIPTION DE VOTRE COMPOSANT',
    properties: {
        myproperty: { type: 'string', default: '', description: '' }
        // ...
    }
});
