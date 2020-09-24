import { defineWebComponent, WebComponentModel, WebComponentTypes } from '../../web-components';

export interface Hint extends WebComponentModel {
  myproperty: string;
}

export const HintComponentDefinition = defineWebComponent({
    type: WebComponentTypes.widget,
    name: 'Hint',
    icon: 'default.svg',
    selector: 'wc-hint',
    description: 'REMPLACEZ CE TEXTE PAR UNE DESCRIPTION DE VOTRE COMPOSANT',
    properties: {
        myproperty: { type: 'string', default: '', description: '' }
        // ...
    }
});
