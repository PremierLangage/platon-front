import {
    defineWebComponent,
    IWebComponent,
    WebComponentTypes,
} from '../../web-component';

export interface PlatonViewerState extends IWebComponent {
    loading: boolean;
    platon: object;
}

export const PlatonViewerComponentDefinition = defineWebComponent({
    type: WebComponentTypes.widget,
    name: 'PlatonViewer',
    icon: 'assets/images/components/widgets/platon-viewer/platon-viewer.svg',
    selector: 'wc-platon-viewer',
    description: 'REMPLACEZ CE TEXTE PAR UNE DESCRIPTION DE VOTRE COMPOSANT',
    fullDescriptionUrl:
        'assets/docs/components/widgets/platon-viewer/platon-viewer.md',
    // https://json-schema.org/understanding-json-schema/
    schema: {
        $schema: 'http://json-schema.org/draft-07/schema',
        type: 'object',
        properties: {
            platon: {
                type: 'object',
                default: {},
                description: 'Information du composant platon a afficher',
            },
            loading: {
                type: 'boolean',
                default: true,
                description: 'Chargement du composant',
            },
        },
    },
});
