import { defineWebComponent, IWebComponent, WebComponentTypes } from '../../web-components';

export interface Matrix extends IWebComponent {
  myproperty: string;
}

export const MatrixComponentDefinition = defineWebComponent({
    type: WebComponentTypes.form,
    name: 'Matrix',
    icon: 'assets/images/components/forms/matrix/matrix.svg',
    selector: 'wc-matrix',
    description: 'REMPLACEZ CE TEXTE PAR UNE DESCRIPTION DE VOTRE COMPOSANT',
    schema: {
        $schema: 'http://json-schema.org/draft-07/schema',
        type: 'object',
        properties: {}
    }
});
