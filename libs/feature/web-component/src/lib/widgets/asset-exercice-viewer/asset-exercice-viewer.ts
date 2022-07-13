import { defineWebComponent, IWebComponent, WebComponentTypes } from '../../web-component';

export interface AssetExerciceViewerState extends IWebComponent {
    type: string;
    name: string;
    url: string;
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
            type: {
                type: 'string',
                default: '',
                description: `Type de l'asset qui doit être un EXERCICE.`
            },
            name: {
                type: 'string',
                default: '',
                description: `Nom de l'asset EXERCICE.`
            },
            url: {
                type: 'string',
                default: '',
                description: `L'url de l'asset EXERCICE`
            }
        },
    },
    showcase: {

    }
});
