import { defineWebComponent, WebComponentModel, WebComponentTypes } from '../../web-components';

export interface RadioGroup extends WebComponentModel {
  myproperty: string;
}

export const RadioGroupComponentDefinition = defineWebComponent({
    type: WebComponentTypes.form,
    name: 'RadioGroup',
    icon: 'default.svg',
    selector: 'wc-radio-group',
    description: 'REMPLACEZ CE TEXTE PAR UNE DESCRIPTION DE VOTRE COMPOSANT',
    properties: {
        myproperty: { type: 'string', default: '', description: '' }
        // ...
    }
});
