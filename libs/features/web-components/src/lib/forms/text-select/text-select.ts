import { defineWebComponent, WebComponentModel, WebComponentTypes } from '../../web-components';

export interface TextSelectSelection {
    position: number | number[];
    content?: string;
}
export interface TextSelect extends WebComponentModel {
    text: string;
    mode: string;
    selections: TextSelectSelection[];
}

export const TextSelectComponentDefinition = defineWebComponent({
    type: WebComponentTypes.form,
    name: 'TextSelect',
    icon: 'default.svg',
    selector: 'wc-text-select',
    description: 'REMPLACEZ CE TEXTE PAR UNE DESCRIPTION DE VOTRE COMPOSANT',
    properties: {
        text: { type: 'string', default: '', description: '' },
        mode: { type: '"free" | "units" | string', default: 'free', description: '' },
        selections: { type: 'TextSelectSelection[]', default: [], description: '' },
    }
});

