import { defineWebComponent, WebComponentModel, WebComponentTypes } from '../../web-components';

export interface RadioGroupItem {
    id: string;
    content: string;
}

export interface RadioGroup extends WebComponentModel {
    items: RadioGroupItem[];
    disabled: boolean;
    selection: string;
    horizontal: boolean;
}

export const RadioGroupComponentDefinition = defineWebComponent({
    type: WebComponentTypes.form,
    name: 'RadioGroup',
    icon: 'default.svg',
    selector: 'wc-radio-group',
    description: 'REMPLACEZ CE TEXTE PAR UNE DESCRIPTION DE VOTRE COMPOSANT',
    properties: {
        items: { type: 'RadioGroupItem[]', default: [], description: '' },
        disabled: { type: 'boolean', default: false, description: '' },
        selection: { type: 'string', default: '', description: '' },
        horizontal: { type: 'boolean', default: false, description: '' },
    }
});
