import {
    defineWebComponent,
    IWebComponent,
    WebComponentTypes,
} from '../../web-component';
import { Platon } from './platon';

export interface PlatonViewerState extends IWebComponent {
    platon: Platon;
    items: Array<String>;
}

export const PlatonViewerComponentDefinition = defineWebComponent({
    type: WebComponentTypes.widget,
    name: 'PlatonViewer',
    icon: 'assets/images/components/widgets/platon-viewer/platon-viewer.svg',
    selector: 'wc-platon-viewer',
    description: "Permet d'afficher un fichier pl de la plateforme.",
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
                description: 'Fichier pl à afficher.',
            },
            items: {
                type: 'array',
                default: [],
                description: 'List beta.',
            },
        },
    },
    showcase: {
        platon: {
            title: 'Demo',
            text: '1+1=3',
            form: '{{radio|component}}',
            selector: 'wc-input-box',
            general_feedback: '\n',
            feedback_correct: "C'était bien la bonne réponse.",
            feedback_wrong: 'Essaie encore',
        },
        items: [
            {
                content: 'Choix 1',
            },
            {
                content: 'Choix 2',
            },
        ],
    },
});
