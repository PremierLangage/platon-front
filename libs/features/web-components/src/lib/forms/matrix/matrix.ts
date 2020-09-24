import { defineWebComponent, WebComponentModel, WebComponentTypes } from '../../web-components';

export interface Matrix extends WebComponentModel {
  myproperty: string;
}

export const MatrixComponentDefinition = defineWebComponent({
    type: WebComponentTypes.form,
    name: 'Matrix',
    icon: 'default.svg',
    selector: 'wc-matrix',
    description: 'REMPLACEZ CE TEXTE PAR UNE DESCRIPTION DE VOTRE COMPOSANT',
    properties: {
        myproperty: { type: 'string', default: '', description: '' }
        // ...
    }
});
