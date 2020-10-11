import { defineWebComponent, IWebComponent, WebComponentTypes } from '../../web-components';

export interface AutomatonEditor extends IWebComponent {
  myproperty: string;
}

export const AutomatonEditorComponentDefinition = defineWebComponent({
    type: WebComponentTypes.form,
    name: 'AutomatonEditor',
    icon: 'assets/images/components/forms/automaton-editor/automaton-editor.svg',
    selector: 'wc-automaton-editor',
    description: 'Permets de saisir un automate à l\'aide d\'un éditeur graphique.',
    schema: {
        $schema: 'http://json-schema.org/draft-07/schema',
        type: 'object',
        properties: {}
    },
});
