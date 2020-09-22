import { defineWebComponent, WebComponentModel, WebComponentTypes } from '../../web-components';

export interface <%= classify(name) %> extends WebComponentModel {
  myproperty: string;
}

export const <%= classify(name) %>ComponentDefinition = defineWebComponent({
    type: WebComponentTypes.<%= type %>,
    name: '<%= classify(name) %>',
    icon: 'default.svg',
    selector: 'wc-<%= name %>',
    description: 'REMPLACEZ CE TEXTE PAR UNE DESCRIPTION DE VOTRE COMPOSANT',
    properties: {
        myproperty: { type: 'string', default: '', description: '' }
        // ...
    }
});
