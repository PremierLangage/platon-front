import { defineWebComponent, IWebComponent, WebComponentTypes } from '../../web-component';

export interface AssetExerciceViewerState extends IWebComponent {
    name: string;
    path: string;
    type: string;
    properties: object;
    content: object;
}

export const AssetExerciceViewerComponentDefinition = defineWebComponent({
    type: WebComponentTypes.widget,
    name: 'AssetExerciceViewer',
    icon: 'assets/images/components/widgets/asset-exercice-viewer/asset-exercice-viewer.svg',
    selector: 'wc-asset-exercice-viewer',
    description: 'REMPLACEZ CE TEXTE PAR UNE DESCRIPTION DE VOTRE COMPOSANT',
    fullDescriptionUrl: 'assets/docs/components/widgets/asset-exercice-viewer/asset-exercice-viewer.md',
    // https://json-schema.org/understanding-json-schema/
    schema: {
        $schema: 'http://json-schema.org/draft-07/schema',
        type: 'object',
        properties: {
            name: {
                type: 'string',
                default: '',
                description: ''
            },
            path: {
                type: 'string',
                default: '',
                description: ''
            },
            type: {
                type: 'string',
                default: '',
                description: ''
            },
            properties: {
                type: 'object',
                default: {},
                description: ''
            },
            content: {
                type: 'object',
                default: {},
                description: ''
            }
        },
    },
    showcase: {

    }
});
