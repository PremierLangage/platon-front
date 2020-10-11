import { defineWebComponent, IWebComponent, WebComponentTypes } from '../../web-components';

export interface GraphViewer extends IWebComponent {
  myproperty: string;
}

export const GraphViewerComponentDefinition = defineWebComponent({
    type: WebComponentTypes.widget,
    name: 'GraphViewer',
    icon: 'assets/images/components/widgets/graph-viewer/graph-viewer.svg',
    selector: 'wc-graph-viewer',
    description: 'REMPLACEZ CE TEXTE PAR UNE DESCRIPTION DE VOTRE COMPOSANT',
    schema: {
        $schema: 'http://json-schema.org/draft-07/schema',
        type: 'object',
        properties: {}
    }
});
