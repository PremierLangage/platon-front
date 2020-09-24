import { defineWebComponent, WebComponentModel, WebComponentTypes } from '../../web-components';

export interface InputBox extends WebComponentModel {
  type: 'number' | 'text' | 'textarea';
  hint: string;
  value: string | number;
  prefix: string;
  suffix: string;
  appearance: 'legacy' | 'standard' | 'fill' | 'outline';
  placeholder: string;
  disabled: boolean;
  autosubmit: boolean;
  completion: string[];
}

export const InputBoxComponentDefinition = defineWebComponent({
    type: WebComponentTypes.form,
    name: 'InputBox',
    icon: 'default.svg',
    selector: 'wc-input-box',
    description: 'REMPLACEZ CE TEXTE PAR UNE DESCRIPTION DE VOTRE COMPOSANT',
    properties: {
        hint: { type: 'string', default: '', description: '' },
        type: { type: 'string', default: 'text', description: '' },
        value: { type: 'string | number', default: '', description: '' },
        prefix: { type: 'string', default: '', description: '' },
        suffix: { type: 'string', default: '', description: '' },
        appearance: { type: 'string', default: 'outline', description: '' },
        placeholder: { type: 'string', default: '', description: '' },
        disabled: { type: 'boolean', default: false, description: '' },
        autosubmit: { type: 'boolean', default: false, description: '' },
        completion: { type: 'string[]', default: [], description: '' },
    }
});
