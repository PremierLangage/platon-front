import { defineWebComponent, WebComponentModel, WebComponentTypes } from '../../web-components';

export interface MathLive extends WebComponentModel {
  myproperty: string;
}

export const MathLiveComponentDefinition = defineWebComponent({
    type: WebComponentTypes.form,
    name: 'MathLive',
    icon: 'default.svg',
    selector: 'wc-math-live',
    description: 'REMPLACEZ CE TEXTE PAR UNE DESCRIPTION DE VOTRE COMPOSANT',
    properties: {
        myproperty: { type: 'string', default: '', description: '' }
        // ...
    }
});
