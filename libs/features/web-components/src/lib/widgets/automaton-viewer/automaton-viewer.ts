import { defineWebComponent, IWebComponent, WebComponentTypes } from '../../web-components';

export interface AutomatonViewer extends IWebComponent {
  myproperty: string;
}

export const AutomatonViewerComponentDefinition = defineWebComponent({
    type: WebComponentTypes.widget,
    name: 'AutomatonViewer',
    icon: 'assets/images/components/forms/automaton-editor/automaton-editor.svg',
    selector: 'wc-automaton-viewer',
    description: 'REMPLACEZ CE TEXTE PAR UNE DESCRIPTION DE VOTRE COMPOSANT',
    schema: {
        $schema: 'http://json-schema.org/draft-07/schema',
        type: 'object',
        properties: {}
    }
});
