import { defineWebComponent, WebComponentModel } from '../web-components';

export interface TextInput extends WebComponentModel {
  myproperty: string;
}

export const TextInputComponentDefinition = defineWebComponent({
    name: 'TextInput',
    icon: 'default.svg',
    selector: 'wc-text-input',
    description: 'REMPLACEZ CE TEXTE PAR UNE DESCRIPTION DE VOTRE COMPOSANT',
    properties: {
        myproperty: { name: 'myproperty', 'type': 'string', default: '', description: '' }
        // ...
    }
});
