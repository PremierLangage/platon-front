import { defineWebComponent, WebComponentModel, WebComponentTypes } from '../../web-components';

export interface CheckboxItem {
    id: string;
    content: string;
    checked?: boolean;
}

export interface CheckboxGroup extends WebComponentModel {
    disabled: boolean;
    horizontal: boolean;
    items: CheckboxItem[];
}

export const CheckboxGroupComponentDefinition = defineWebComponent({
    type: WebComponentTypes.form,
    name: 'CheckboxGroup',
    icon: 'default.svg',
    selector: 'wc-checkbox-group',
    description: 'REMPLACEZ CE TEXTE PAR UNE DESCRIPTION DE VOTRE COMPOSANT',
    properties: {
        disabled: { type: 'boolean', default: false, description: '' },
        horizontal: { type: 'boolean', default: false, description: '' },
        items: { type: 'CheckboxItem[]', default: [], description: '' },
    }
});
