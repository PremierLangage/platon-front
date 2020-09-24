import { defineWebComponent, WebComponentModel, WebComponentTypes } from '../../web-components';

export interface Jsx extends WebComponentModel {
  myproperty: string;
}

export const JsxComponentDefinition = defineWebComponent({
    type: WebComponentTypes.form,
    name: 'Jsx',
    icon: 'default.svg',
    selector: 'wc-jsx',
    description: 'REMPLACEZ CE TEXTE PAR UNE DESCRIPTION DE VOTRE COMPOSANT',
    properties: {
        myproperty: { type: 'string', default: '', description: '' }
        // ...
    }
});
