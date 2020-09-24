import { defineWebComponent, WebComponentModel, WebComponentTypes } from '../../web-components';

export interface MatchList extends WebComponentModel {
  myproperty: string;
}

export const MatchListComponentDefinition = defineWebComponent({
    type: WebComponentTypes.form,
    name: 'MatchList',
    icon: 'default.svg',
    selector: 'wc-match-list',
    description: 'REMPLACEZ CE TEXTE PAR UNE DESCRIPTION DE VOTRE COMPOSANT',
    properties: {
        myproperty: { type: 'string', default: '', description: '' }
        // ...
    }
});
