import { defineWebComponent, IWebComponent, WebComponentTypes } from '../../web-component';

export interface PlatonViewerState extends IWebComponent {
    form: string;
    process: object;
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
            form: {
                type: 'string',
                default: '',
                description: 'Composant a afficher'
            },
            process: {
                type: 'object',
                default: {},
                description: 'State du composant a construire.'
            }
        }
    },
    showcase: {
        form: "{{radio|component}}",
        process: {
            cid: "0bb2efc2-0569-4679-8fb6-c71985338534",
            horizontal: false,
            selector: "wc-radio-group",
            state: {
                items: [
                    {
                        content: "La reponse est Vrai"
                    },
                    {
                        content: "La reponse est Fausse"
                    }
                ]
            }
        }
    }
});
