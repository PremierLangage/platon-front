import { defineWebComponent, WebComponentModel, WebComponentTypes } from '../../web-components';

export interface TextSelect extends WebComponentModel {
  myproperty: string;
}

export const TextSelectComponentDefinition = defineWebComponent({
    type: WebComponentTypes.form,
    name: 'TextSelect',
    icon: 'default.svg',
    selector: 'wc-text-select',
    description: 'REMPLACEZ CE TEXTE PAR UNE DESCRIPTION DE VOTRE COMPOSANT',
    properties: {
        myproperty: { type: 'string', default: '', description: '' }
        // ...
    }
});
