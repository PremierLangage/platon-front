import { defineWebComponent, WebComponentModel, WebComponentTypes } from '../../web-components';

export interface AutomatonEditor extends WebComponentModel {
  myproperty: string;
}

export const AutomatonEditorComponentDefinition = defineWebComponent({
    type: WebComponentTypes.form,
    name: 'AutomatonEditor',
    icon: 'default.svg',
    selector: 'wc-automaton-editor',
    description: 'REMPLACEZ CE TEXTE PAR UNE DESCRIPTION DE VOTRE COMPOSANT',
    properties: {
        myproperty: { type: 'string', default: '', description: '' }
        // ...
    }
});
