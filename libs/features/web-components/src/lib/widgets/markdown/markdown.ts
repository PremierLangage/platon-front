import { defineWebComponent, WebComponentModel, WebComponentTypes } from '../../web-components';

export interface Markdown extends WebComponentModel {
  myproperty: string;
}

export const MarkdownComponentDefinition = defineWebComponent({
    type: WebComponentTypes.widget,
    name: 'Markdown',
    icon: 'default.svg',
    selector: 'wc-markdown',
    description: 'REMPLACEZ CE TEXTE PAR UNE DESCRIPTION DE VOTRE COMPOSANT',
    properties: {
        myproperty: { type: 'string', default: '', description: '' }
        // ...
    }
});
