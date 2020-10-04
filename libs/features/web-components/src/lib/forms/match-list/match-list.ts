import { defineWebComponent, WebComponentModel, WebComponentTypes } from '../../web-components';


export interface MatchListItem {
    id: string;
    type: 'source' | 'target';
    content: string;
}

export interface MathListLink {
    source: string;
    target: string;
}
export interface MatchList extends WebComponentModel {
  disabled: boolean;
  links: MathListLink[];
  nodes: MatchListItem[];
}

export const MatchListComponentDefinition = defineWebComponent({
    type: WebComponentTypes.form,
    name: 'MatchList',
    icon: 'default.svg',
    selector: 'wc-match-list',
    description: 'REMPLACEZ CE TEXTE PAR UNE DESCRIPTION DE VOTRE COMPOSANT',
    properties: {
        disabled: { type: 'boolean', default: false, description: '' },
        links: { type: 'MathListLink[]', default: [], description: '' },
        nodes: { type: 'MatchListItem[]', default: [
            { "id": "Node1", "type": "source", "content": "trois champs nom(char*), prénom(char*) et age(int)", },
            { "id": "Node2", "type": "source", "content": "Une matrice rectangulaire `m` par `n` (deux entiers)", },
            { "id": "Node3", "type": "source", "content": "Un noeud d'arbre de personnes (char* nom et char* prénom)" },
            { "id": "Node4", "type": "source", "content": "Une chaine (char[64]) de moins de 63 caractère" },
            { "id": "Node5", "type": "source", "content": "Une cellule de liste chaînée de floatant" },

            { "id": "Node6", "type": "target", "content": "trois mallocs" },
            { "id": "Node7", "type": "target", "content": "un malloc puis malloc dans un for" },
            { "id": "Node8", "type": "target", "content": "deux mallocs" },
            { "id": "Node9", "type": "target", "content": "aucun malloc" },
            { "id": "Node10", "type": "target", "content": "un malloc" },

            { "id": "Node11", "type": "source", "content": "![alt text](https://squidfunk.github.io/mkdocs-material/assets/images/illustration.png)" },
            { "id": "Node12", "type": "target", "content": "$c = \\pm\\sqrt&#123;a^2 + b^2&#125;$" },
        ], description: '' },
    }
});
