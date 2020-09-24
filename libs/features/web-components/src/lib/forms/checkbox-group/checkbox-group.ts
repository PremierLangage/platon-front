import { defineWebComponent, WebComponentModel, WebComponentTypes } from '../../web-components';

export interface CheckboxGroup extends WebComponentModel {
  myproperty: string;
}

export const CheckboxGroupComponentDefinition = defineWebComponent({
    type: WebComponentTypes.form,
    name: 'CheckboxGroup',
    icon: 'default.svg',
    selector: 'wc-checkbox-group',
    description: 'REMPLACEZ CE TEXTE PAR UNE DESCRIPTION DE VOTRE COMPOSANT',
    properties: {
        myproperty: { type: 'string', default: '', description: '' }
        // ...
    }
});
