import { defineWebComponent, WebComponentModel, WebComponentTypes } from '../../web-components';

export interface Picker extends WebComponentModel {
  myproperty: string;
}

export const PickerComponentDefinition = defineWebComponent({
    type: WebComponentTypes.form,
    name: 'Picker',
    icon: 'default.svg',
    selector: 'wc-picker',
    description: 'REMPLACEZ CE TEXTE PAR UNE DESCRIPTION DE VOTRE COMPOSANT',
    properties: {
        myproperty: { type: 'string', default: '', description: '' }
        // ...
    }
});
