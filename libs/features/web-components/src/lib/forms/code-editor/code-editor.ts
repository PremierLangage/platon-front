import { defineWebComponent, WebComponentModel, WebComponentTypes } from '../../web-components';

export interface CodeEditor extends WebComponentModel {
  code: string;
  options: monaco.editor.IEditorOptions;
  language: string;
}

export const CodeEditorComponentDefinition = defineWebComponent({
    type: WebComponentTypes.form,
    name: 'CodeEditor',
    icon: 'default.svg',
    selector: 'wc-code-editor',
    description: 'REMPLACEZ CE TEXTE PAR UNE DESCRIPTION DE VOTRE COMPOSANT',
    properties: {
        code: { type: 'string', default: '', description: '' },
        language: { type: 'string', default: '', description: '' },
        options: { type: 'object', default: {}, description: '' }
    }
});
