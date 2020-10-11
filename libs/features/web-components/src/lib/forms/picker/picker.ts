import { defineWebComponent, IWebComponent, WebComponentTypes } from '../../web-components';

export interface Picker extends IWebComponent {
  myproperty: string;
}

export const PickerComponentDefinition = defineWebComponent({
    type: WebComponentTypes.form,
    name: 'Picker',
    icon: 'assets/images/components/forms/automaton-editor/automaton-editor.svg',
    selector: 'wc-picker',
    description: 'REMPLACEZ CE TEXTE PAR UNE DESCRIPTION DE VOTRE COMPOSANT',
    schema: {
        $schema: 'http://json-schema.org/draft-07/schema',
        type: 'object',
        properties: {}
    }
});
