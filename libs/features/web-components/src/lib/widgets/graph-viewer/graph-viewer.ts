import { defineWebComponent, WebComponentModel, WebComponentTypes } from '../../web-components';

export interface GraphViewer extends WebComponentModel {
  myproperty: string;
}

export const GraphViewerComponentDefinition = defineWebComponent({
    type: WebComponentTypes.widget,
    name: 'GraphViewer',
    icon: 'default.svg',
    selector: 'wc-graph-viewer',
    description: 'REMPLACEZ CE TEXTE PAR UNE DESCRIPTION DE VOTRE COMPOSANT',
    properties: {
        myproperty: { type: 'string', default: '', description: '' }
        // ...
    }
});
