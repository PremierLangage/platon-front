import { stripIndent } from 'common-tags'
import { defineWebComponent, IWebComponent, WebComponentTypes } from '../../web-components';

export interface CodeEditor extends IWebComponent {
  code: string;
  language: string;
}

export const CodeEditorComponentDefinition = defineWebComponent({
    type: WebComponentTypes.form,
    name: 'CodeEditor',
    icon: 'assets/images/components/forms/code-editor/code-editor.svg',
    selector: 'wc-code-editor',
    description: 'Un éditeur de code proposant de la coloration syntaxique.',
    schema: {
        $schema: 'http://json-schema.org/draft-07/schema',
        type: 'object',
        title: 'CodeEditor',
        properties: {
            code: { type: 'string', default: '', description: 'Le contenu de l\'éditeur.' },
            language: { type: 'string', default: 'plaintext', description: 'Le langage pour la coloration syntaxique.' },
        }
    },
    showcase: {
        language: 'python',
        code: stripIndent`
        # This program adds two numbers

        num1 = 1.5
        num2 = 6.3

        # Add two numbers
        sum = num1 + num2

        # Display the sum
        print('The sum of {0} and {1} is {2}'.format(num1, num2, sum))
        `
    },
});
