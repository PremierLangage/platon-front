import { defineWebComponent, WebComponentModel, WebComponentTypes } from '../../web-components';

export interface CodeViewer extends WebComponentModel {
  code: string;
  lines: string;
  language: string;
  highlights: string;
}

export const CodeViewerComponentDefinition = defineWebComponent({
    type: WebComponentTypes.widget,
    name: 'CodeViewer',
    icon: 'default.svg',
    selector: 'wc-code-viewer',
    description: 'REMPLACEZ CE TEXTE PAR UNE DESCRIPTION DE VOTRE COMPOSANT',
    properties: {
        code: { type: 'string', default: '', description: '' },
        lines: { type: 'string', default: '', description: '' },
        language: { type: 'string', default: 'plaintext', description: '' },
        highlights: { type: 'string', default: '', description: '' },
    }
});
