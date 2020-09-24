import { defineWebComponent, WebComponentModel, WebComponentTypes } from '../../web-components';

export interface AutomatonViewer extends WebComponentModel {
  myproperty: string;
}

export const AutomatonViewerComponentDefinition = defineWebComponent({
    type: WebComponentTypes.widget,
    name: 'AutomatonViewer',
    icon: 'default.svg',
    selector: 'wc-automaton-viewer',
    description: 'REMPLACEZ CE TEXTE PAR UNE DESCRIPTION DE VOTRE COMPOSANT',
    properties: {
        myproperty: { type: 'string', default: '', description: '' }
        // ...
    }
});
