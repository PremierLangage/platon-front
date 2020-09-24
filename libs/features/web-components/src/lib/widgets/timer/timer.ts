import { defineWebComponent, WebComponentModel, WebComponentTypes } from '../../web-components';

export interface Timer extends WebComponentModel {
  myproperty: string;
}

export const TimerComponentDefinition = defineWebComponent({
    type: WebComponentTypes.widget,
    name: 'Timer',
    icon: 'default.svg',
    selector: 'wc-timer',
    description: 'REMPLACEZ CE TEXTE PAR UNE DESCRIPTION DE VOTRE COMPOSANT',
    properties: {
        myproperty: { type: 'string', default: '', description: '' }
        // ...
    }
});
