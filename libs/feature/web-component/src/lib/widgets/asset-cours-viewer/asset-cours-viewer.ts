import { AssetTypes } from '../../shared/models/asset';
import { defineWebComponent, IWebComponent, WebComponentTypes } from '../../web-component';


export interface AssetCoursContent {
    position: number;
    type: AssetTypes;
    name: string;
}

export interface AssetCoursViewerState extends IWebComponent {
    path: string;
    type: string;
    properties: object;
    content: {
        items: AssetCoursContent[]
    };
}

export const AssetCoursViewerComponentDefinition = defineWebComponent({
    type: WebComponentTypes.widget,
    name: 'AssetCoursViewer',
    icon: 'assets/images/components/widgets/asset-cours-viewer/asset-cours-viewer.svg',
    selector: 'wc-asset-cours-viewer',
    description: 'REMPLACEZ CE TEXTE PAR UNE DESCRIPTION DE VOTRE COMPOSANT',
    fullDescriptionUrl: 'assets/docs/components/widgets/asset-cours-viewer/asset-cours-viewer.md',
    // https://json-schema.org/understanding-json-schema/
    schema: {
        $schema: 'http://json-schema.org/draft-07/schema',
        type: 'object',
        properties: {
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
        }
    },
    showcase: {

    }
});
