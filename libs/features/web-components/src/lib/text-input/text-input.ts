import { defineWebComponent, WebComponentModel } from '../web-components';

export interface TextInput extends WebComponentModel {
    value: string|number;
}

export const TextInputComponentDefinition = defineWebComponent({
    name: 'TextInput',
    icon: 'input.svg',
    selector: 'wc-text-input',
    description: 'Inputs provides a way for users to enter a data.',
    properties: {
        value: { name: 'value', type: 'string', default: '', description: '' }
    }
});
