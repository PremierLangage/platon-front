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


// ===========================================
// FLEX-MODULER
// ===========================================

export const testFlex = {
    "order":"0",
    "direction":"row",
    "wrap":"wrap",
    "grow":0,
    "justify": "flex-start",
    "alignItems":"flex-start",
    "alignContent":"normal",
    "alignSelf":"auto",
}

export interface FlexModuler {
    order: 0|1|2|3|4|5|6|7|8|9;
    direction: "row"|"row-reverse"|"column"|"colmun-reverse";
    wrap: "nowrap"|"wrap"|"wrap-reverse";
    grow: number;
    justify: "flex-start"|"flex-end"|"center"|"space-between"|"space-around"|"space-evenly";
    alignItems: "flex-start"|"flex-end"|"center"|"stretch"|"baseline";
    alignContent: "normal"|"flex-start"|"flex-end"|"center"|"stretch"|"space-between"|"space-around"|"space-evenly";
    alignSelf: "auto"|"flex-start"|"flex-end"|"center"|"stretch"|"baseline";
}

export interface ExerciceFlexModuler {
    state: FlexModuler;
    feedback: FlexModuler;
    form: FlexModuler;
    buttons: FlexModuler;
}

// ===========================================
// FEEDBACK
// ===========================================

export interface ExerciceFeedBack {
    score: number;
    feedback : string;
}

export const ExampleFeedBack : ExerciceFeedBack = {
    score : 100,
    feedback: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
}

// ===========================================
// FORM / STATE
// ===========================================

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
    },
    author: string;
    version: string;
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
            },
            author: {
                type: 'string',
                default: '',
                description: 'Author of the Exercice'
            },
            version: {
                type: 'string',
                default: '0.1',
                description: 'Version of the Exercice'
            }
        }
    },
    showcase: {
        process: {
            "title": "Titre Exercice Exemple",
            "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            "formState": {

                items: ['Choix1', 'Choix2', 'Choix3'],
                disable: false,
                horizontal: false,
                selection: "",
                cid: "",
                debug: false,
                selector: "wc-radio-group"
            },
        },
        author: "Platon4Ever",
        version: "42",
    }
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
