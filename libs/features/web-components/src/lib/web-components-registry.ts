import { Provider } from '@angular/core';
import { LazyComponentDef } from '@juristr/ngx-lazy-el';
import { WEB_COMPONENT_DEFINITIONS } from './web-components';
import { InputBoxComponentDefinition } from './forms/input-box/input-box';
import { CodeViewerComponentDefinition } from './widgets/code-viewer/code-viewer';
import { CodeEditorComponentDefinition } from './forms/code-editor/code-editor';
import { RadioGroupComponentDefinition } from './forms/radio-group/radio-group';
import { CheckboxGroupComponentDefinition } from './forms/checkbox-group/checkbox-group';
import { SortListComponentDefinition } from './forms/sort-list/sort-list';
import { TextSelectComponentDefinition } from './forms/text-select/text-select';
import { AutomatonEditorComponentDefinition } from './forms/automaton-editor/automaton-editor';
import { MatchListComponentDefinition } from './forms/match-list/match-list';
import { MatrixComponentDefinition } from './forms/matrix/matrix';
import { PickerComponentDefinition } from './forms/picker/picker';
import { MathLiveComponentDefinition } from './forms/math-live/math-live';
import { JsxComponentDefinition } from './forms/jsx/jsx';
import { AutomatonViewerComponentDefinition } from './widgets/automaton-viewer/automaton-viewer';
import { GraphViewerComponentDefinition } from './widgets/graph-viewer/graph-viewer';
import { HintComponentDefinition } from './widgets/hint/hint';
import { MarkdownComponentDefinition } from './widgets/markdown/markdown';
import { TimerComponentDefinition } from './widgets/timer/timer';

export const WEB_COMPONENTS_BUNDLES: LazyComponentDef[] = [
    { selector: 'wc-input-box', loadChildren: () => import('./forms/input-box/input-box.module').then(m => m.InputBoxModule) },
    { selector: 'wc-code-viewer', loadChildren: () => import('./widgets/code-viewer/code-viewer.module').then(m => m.CodeViewerModule) },
    { selector: 'wc-code-editor', loadChildren: () => import('./forms/code-editor/code-editor.module').then(m => m.CodeEditorModule) },
    { selector: 'wc-radio-group', loadChildren: () => import('./forms/radio-group/radio-group.module').then(m => m.RadioGroupModule) },
    { selector: 'wc-checkbox-group', loadChildren: () => import('./forms/checkbox-group/checkbox-group.module').then(m => m.CheckboxGroupModule) },
    { selector: 'wc-sort-list', loadChildren: () => import('./forms/sort-list/sort-list.module').then(m => m.SortListModule) },
    { selector: 'wc-text-select', loadChildren: () => import('./forms/text-select/text-select.module').then(m => m.TextSelectModule) },
    { selector: 'wc-automaton-editor', loadChildren: () => import('./forms/automaton-editor/automaton-editor.module').then(m => m.AutomatonEditorModule) },
    { selector: 'wc-match-list', loadChildren: () => import('./forms/match-list/match-list.module').then(m => m.MatchListModule) },
    { selector: 'wc-matrix', loadChildren: () => import('./forms/matrix/matrix.module').then(m => m.MatrixModule) },
    { selector: 'wc-picker', loadChildren: () => import('./forms/picker/picker.module').then(m => m.PickerModule) },
    { selector: 'wc-math-live', loadChildren: () => import('./forms/math-live/math-live.module').then(m => m.MathLiveModule) },
    { selector: 'wc-jsx', loadChildren: () => import('./forms/jsx/jsx.module').then(m => m.JsxModule) },
    { selector: 'wc-automaton-viewer', loadChildren: () => import('./widgets/automaton-viewer/automaton-viewer.module').then(m => m.AutomatonViewerModule) },
    { selector: 'wc-graph-viewer', loadChildren: () => import('./widgets/graph-viewer/graph-viewer.module').then(m => m.GraphViewerModule) },
    { selector: 'wc-hint', loadChildren: () => import('./widgets/hint/hint.module').then(m => m.HintModule) },
    { selector: 'wc-markdown', loadChildren: () => import('./widgets/markdown/markdown.module').then(m => m.MarkdownModule) },
    { selector: 'wc-timer', loadChildren: () => import('./widgets/timer/timer.module').then(m => m.TimerModule) },
];

export const WEB_COMPONENTS_REGISTRY: Provider[] = [
    { provide: WEB_COMPONENT_DEFINITIONS, multi: true, useValue: InputBoxComponentDefinition },
    { provide: WEB_COMPONENT_DEFINITIONS, multi: true, useValue: CodeViewerComponentDefinition },
    { provide: WEB_COMPONENT_DEFINITIONS, multi: true, useValue: CodeEditorComponentDefinition },
    { provide: WEB_COMPONENT_DEFINITIONS, multi: true, useValue: RadioGroupComponentDefinition },
    { provide: WEB_COMPONENT_DEFINITIONS, multi: true, useValue: CheckboxGroupComponentDefinition },
    { provide: WEB_COMPONENT_DEFINITIONS, multi: true, useValue: SortListComponentDefinition },
    { provide: WEB_COMPONENT_DEFINITIONS, multi: true, useValue: TextSelectComponentDefinition },
    // { provide: WEB_COMPONENT_DEFINITIONS, multi: true, useValue: AutomatonEditorComponentDefinition },
    { provide: WEB_COMPONENT_DEFINITIONS, multi: true, useValue: MatchListComponentDefinition },
    // { provide: WEB_COMPONENT_DEFINITIONS, multi: true, useValue: MatrixComponentDefinition },
    // { provide: WEB_COMPONENT_DEFINITIONS, multi: true, useValue: PickerComponentDefinition },
    // { provide: WEB_COMPONENT_DEFINITIONS, multi: true, useValue: MathLiveComponentDefinition },
    // { provide: WEB_COMPONENT_DEFINITIONS, multi: true, useValue: JsxComponentDefinition },
    // { provide: WEB_COMPONENT_DEFINITIONS, multi: true, useValue: AutomatonViewerComponentDefinition },
    // { provide: WEB_COMPONENT_DEFINITIONS, multi: true, useValue: GraphViewerComponentDefinition },
    // { provide: WEB_COMPONENT_DEFINITIONS, multi: true, useValue: HintComponentDefinition },
    { provide: WEB_COMPONENT_DEFINITIONS, multi: true, useValue: MarkdownComponentDefinition },
    // { provide: WEB_COMPONENT_DEFINITIONS, multi: true, useValue: TimerComponentDefinition },
];
