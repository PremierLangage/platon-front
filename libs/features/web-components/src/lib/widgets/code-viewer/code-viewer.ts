import { defineWebComponent, WebComponentModel, WebComponentTypes } from '../../web-components';

export interface CodeViewer extends WebComponentModel {
  code: string;
  language: string;
}

export const CodeViewerComponentDefinition = defineWebComponent({
    type: WebComponentTypes.widget,
    name: 'CodeViewer',
    icon: 'default.svg',
    selector: 'wc-code-viewer',
    description: 'Affiche un bloc de code avec de la coloration syntaxique.',
    properties: {
        code: { name: 'code', 'type': 'string', default: '', description: 'Le code à afficher' },
        language: { name: 'language', 'type': 'string', default: '', description: 'Le langage pour la coloration syntaxique.' }
    }
});
