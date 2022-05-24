import { defineWebComponent, IWebComponent, WebComponentTypes } from '../../web-component';

export interface PlatonViewerState extends IWebComponent {
  myproperty: string;
}

export const PlatonViewerComponentDefinition = defineWebComponent({
    type: WebComponentTypes.widget,
    name: 'PlatonViewer',
    icon: 'assets/images/components/widgets/platon-viewer/platon-viewer.svg',
    selector: 'wc-platon-viewer',
    description: 'REMPLACEZ CE TEXTE PAR UNE DESCRIPTION DE VOTRE COMPOSANT',
    fullDescriptionUrl: 'assets/docs/components/widgets/platon-viewer/platon-viewer.md',
    // https://json-schema.org/understanding-json-schema/
    schema: {
        $schema: 'http://json-schema.org/draft-07/schema',
        type: 'object',
        properties: {
            myproperty: { type: 'string', default: '', description: '' }
        }
    }
});
