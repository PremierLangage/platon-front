import { defineWebComponent, IWebComponent, WebComponentTypes } from '../../web-components';

export interface Jsx extends IWebComponent {
  myproperty: string;
}

export const JsxComponentDefinition = defineWebComponent({
    type: WebComponentTypes.form,
    name: 'Jsx',
    icon: 'assets/images/components/forms/jsx/jsx.svg',
    selector: 'wc-jsx',
    description: 'REMPLACEZ CE TEXTE PAR UNE DESCRIPTION DE VOTRE COMPOSANT',
    schema: {
        $schema: 'http://json-schema.org/draft-07/schema',
        type: 'object',
        properties: {}
    }
});
