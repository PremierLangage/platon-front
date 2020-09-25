import { defineWebComponent, WebComponentModel, WebComponentTypes } from '../../web-components';

export interface SortListItem {
    id: string;
    content: string;
}

export interface SortList extends WebComponentModel {
    items: SortListItem[];
    disabled: boolean;
}

export const SortListComponentDefinition = defineWebComponent({
    type: WebComponentTypes.form,
    name: 'SortList',
    icon: 'default.svg',
    selector: 'wc-sort-list',
    description: 'REMPLACEZ CE TEXTE PAR UNE DESCRIPTION DE VOTRE COMPOSANT',
    properties: {
        items: { type: 'SortListItem[]', default: [], description: '' },
        disabled: { type: 'boolean', default: false, description: '' },
    }
});
