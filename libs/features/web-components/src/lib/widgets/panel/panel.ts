import { defineWebComponent, WebComponentModel, WebComponentTypes } from '../../web-components';

export enum PanelType {
    note = 'note',
    abstract = 'abstract',
    info = 'info',
    tip = 'tip',
    success = 'success',
    question = 'question',
    warning = 'warning',
    failure = 'failure',
    danger = 'danger',
    bug = 'bug',
    example = 'example',
    quote = 'quote'
}

export interface Panel extends WebComponentModel {
    type: PanelType;
    title: string;
    content: string;
    expanded: boolean;
    expandable: boolean;
}

export const PanelComponentDefinition = defineWebComponent({
    type: WebComponentTypes.widget,
    name: 'Panel',
    icon: 'default.svg',
    selector: 'wc-panel',
    description: 'Un panel permet d\'afficher un contenu dans un bloc avec un style prédéfinie.',
    properties: {
        type: { type: 'PanelType', default: PanelType.note, description: 'Le type du panel.' },
        title: { type: 'string', default: '', description: 'Le titre du panel.' },
        content: { type: 'string', default: '', description: 'Le contenu du panel.' },
        expanded: { type: 'boolean', default: true, description: 'Indique si le panel est plié/déplié.' },
        expandable: { type: 'boolean', default: false, description: 'Indique si le panel peut être plié/déplié.' },
    },
});
