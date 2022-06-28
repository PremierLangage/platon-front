import { AutomatonEditorState } from '../../forms/automaton-editor/automaton-editor';
import { CheckboxGroupState } from '../../forms/checkbox-group/checkbox-group';
import { CodeEditorState } from '../../forms/code-editor/code-editor';
import { DragDropState } from '../../forms/drag-drop/drag-drop';
import { InputBoxState } from '../../forms/input-box/input-box';
import { JsxState } from '../../forms/jsx/jsx';
import { MatchListState } from '../../forms/match-list/match-list';
import { MathLiveState } from '../../forms/math-live/math-live';
import { MatrixState } from '../../forms/matrix/matrix';
import { PickerState } from '../../forms/picker/picker';
import { RadioGroupState } from '../../forms/radio-group/radio-group';
import { SortListState } from '../../forms/sort-list/sort-list';
import { TextSelectState } from '../../forms/text-select/text-select';
import { defineWebComponent, IWebComponent, WebComponentTypes } from '../../web-component';

export interface ExerciceFeedBack {
    score: number;
    feedback : string;
}

export const ExampleFeedBack : ExerciceFeedBack = {
    score : 100,
    feedback: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
}

export interface ExerciceState extends IWebComponent {
    process: {
        title : string;
        text : string;
        formState :
            AutomatonEditorState |
            CheckboxGroupState |
            CodeEditorState |
            DragDropState |
            InputBoxState |
            JsxState |
            MatchListState |
            MathLiveState |
            MatrixState |
            PickerState |
            RadioGroupState |
            SortListState |
            TextSelectState
    };
}


export const ExerciceComponentDefinition = defineWebComponent({
    type: WebComponentTypes.widget,
    name: 'Exercice',
    icon: 'assets/images/components/widgets/exercice/exercice.svg',
    selector: 'wc-exercice',
    description: 'Modèle d\'exercice générique permettant la création des exercices de la plateforme.',
    fullDescriptionUrl: 'assets/docs/components/widgets/exercice/exercice.md',
    // https://json-schema.org/understanding-json-schema/
    schema: {
        $schema: 'http://json-schema.org/draft-07/schema',
        type: 'object',
        required: ['formState'],
        properties: {
            process: {
                type: 'object',
                default: {},
                description: 'Process json content'
            }
        }
    },
    showcase: {
        process: {
            "title": "Titre Exercice Exemple",
            "text": "Est-ce que le résultat de ce l'équation 1 + 1 = 3 est correcte ?",
            "formState": {

                items: ['Correcte', 'Incorrecte', 'Ne sais pas'],
                disable: false,
                horizontal: false,
                selection: "",
                cid: "",
                debug: false,
                selector: "wc-radio-group"
            },
        }
    },
});



// cid: "",
// debug: false,
// selector: "wc-code-editor",
// code: stripIndent`
// # This program adds two numbers

// num1 = 1.5
// num2 = 6.3

// # Add two numbers
// sum = num1 + num2

// # Display the sum
// print('The sum of {0} and {1} is {2}'.format(num1, num2, sum))
// `,
// language: 'python'
