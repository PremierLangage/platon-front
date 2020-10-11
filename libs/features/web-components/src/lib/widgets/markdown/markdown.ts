import { defineWebComponent, IWebComponent, WebComponentTypes } from '../../web-components';

export interface Markdown extends IWebComponent {
  myproperty: string;
}

export const MarkdownComponentDefinition = defineWebComponent({
    type: WebComponentTypes.widget,
    name: 'Markdown',
    icon: 'assets/images/components/forms/automaton-editor/automaton-editor.svg',
    selector: 'wc-markdown',
    description: 'REMPLACEZ CE TEXTE PAR UNE DESCRIPTION DE VOTRE COMPOSANT',
    schema: {
        $schema: 'http://json-schema.org/draft-07/schema',
        type: 'object',
        properties: {}
    }
});
