import { defineWebComponent, WebComponentModel } from '../web-components';

export interface CriteriaGrid extends WebComponentModel {
  myproperty: string;
}

export const CriteriaGridComponentDefinition = defineWebComponent({
    name: 'CriteriaGrid',
    icon: 'default.svg',
    selector: 'wc-criteria-grid',
    description: 'Vous permet de créer une grille critériée',
    properties: {
        myproperty: {
            name: 'items',
            'type': 'Criterion[]',
            default: '[\
            {\
              id: 0,\
              description: \'1er critere\',\
              levels: [\
                { id: 0, description: \'insuffisant\', points: 0 },\
                { id: 1, description: \'correct\', points: 1 },\
                { id: 2, description: \'super\', points: 2 },\
              ],\
            },\
          ]',
          description: 'An array of objects of the following format representing the items to render'
        }
    }
});
