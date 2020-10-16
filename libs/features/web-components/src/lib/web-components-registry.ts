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
    { selector: 'wc-automaton-editor', loadChildren: () => import(/* webpackChunkName: "wc-automaton-editor" */ './forms/automaton-editor/automaton-editor.module').then(m => m.AutomatonEditorModule) },
    { selector: 'wc-automaton-viewer', loadChildren: () => import(/* webpackChunkName: "wc-automaton-viewer" */ './widgets/automaton-viewer/automaton-viewer.module').then(m => m.AutomatonViewerModule) },
    { selector: 'wc-checkbox-group', loadChildren: () => import(/* webpackChunkName: "wc-checkbox-group" */ './forms/checkbox-group/checkbox-group.module').then(m => m.CheckboxGroupModule) },
    { selector: 'wc-code-editor', loadChildren: () => import(/* webpackChunkName: "wc-code-editor" */ './forms/code-editor/code-editor.module').then(m => m.CodeEditorModule) },
    { selector: 'wc-code-viewer', loadChildren: () => import(/* webpackChunkName: "wc-code-viewer" */ './widgets/code-viewer/code-viewer.module').then(m => m.CodeViewerModule) },
    { selector: 'wc-graph-viewer', loadChildren: () => import( /* webpackChunkName: "wc-graph-viewer" */ './widgets/graph-viewer/graph-viewer.module').then(m => m.GraphViewerModule) },
    { selector: 'wc-hint', loadChildren: () => import(/* webpackChunkName: "wc-hint" */ './widgets/hint/hint.module').then(m => m.HintModule) },
    { selector: 'wc-input-box', loadChildren: () => import(/* webpackChunkName: "wc-input-box" */ './forms/input-box/input-box.module').then(m => m.InputBoxModule) },
    { selector: 'wc-jsx', loadChildren: () => import(/* webpackChunkName: "wc-jsx" */ './forms/jsx/jsx.module').then(m => m.JsxModule) },
    { selector: 'wc-markdown', loadChildren: () => import(/* webpackChunkName: "wc-markdown" */ './widgets/markdown/markdown.module').then(m => m.MarkdownModule) },
    { selector: 'wc-match-list', loadChildren: () => import(/* webpackChunkName: "wc-match-list" */ './forms/match-list/match-list.module').then(m => m.MatchListModule) },
    { selector: 'wc-math-live', loadChildren: () => import(/* webpackChunkName: "wc-math-live" */ './forms/math-live/math-live.module').then(m => m.MathLiveModule) },
    { selector: 'wc-matrix', loadChildren: () => import(/* webpackChunkName: "wc-matrix" */ './forms/matrix/matrix.module').then(m => m.MatrixModule) },
    { selector: 'wc-picker', loadChildren: () => import(/* webpackChunkName: "wc-picker" */ './forms/picker/picker.module').then(m => m.PickerModule) },
    { selector: 'wc-radio-group', loadChildren: () => import(/* webpackChunkName: "wc-radio-group" */ './forms/radio-group/radio-group.module').then(m => m.RadioGroupModule) },
    { selector: 'wc-sort-list', loadChildren: () => import(/* webpackChunkName: "wc-sort-list" */ './forms/sort-list/sort-list.module').then(m => m.SortListModule) },
    { selector: 'wc-text-select', loadChildren: () => import(/* webpackChunkName: "wc-text-select" */ './forms/text-select/text-select.module').then(m => m.TextSelectModule) },
    { selector: 'wc-timer', loadChildren: () => import(/* webpackChunkName: "wc-timer" */ './widgets/timer/timer.module').then(m => m.TimerModule) },
];

export const WEB_COMPONENTS_REGISTRY: Provider[] = [
    // { provide: WEB_COMPONENT_DEFINITIONS, multi: true, useValue: AutomatonEditorComponentDefinition },
    { provide: WEB_COMPONENT_DEFINITIONS, multi: true, useValue: AutomatonViewerComponentDefinition },
    { provide: WEB_COMPONENT_DEFINITIONS, multi: true, useValue: CheckboxGroupComponentDefinition },
    { provide: WEB_COMPONENT_DEFINITIONS, multi: true, useValue: CodeEditorComponentDefinition },
    { provide: WEB_COMPONENT_DEFINITIONS, multi: true, useValue: CodeViewerComponentDefinition },
    { provide: WEB_COMPONENT_DEFINITIONS, multi: true, useValue: GraphViewerComponentDefinition },
    // { provide: WEB_COMPONENT_DEFINITIONS, multi: true, useValue: HintComponentDefinition },
    { provide: WEB_COMPONENT_DEFINITIONS, multi: true, useValue: InputBoxComponentDefinition },
    // { provide: WEB_COMPONENT_DEFINITIONS, multi: true, useValue: JsxComponentDefinition },
    { provide: WEB_COMPONENT_DEFINITIONS, multi: true, useValue: MarkdownComponentDefinition },
    { provide: WEB_COMPONENT_DEFINITIONS, multi: true, useValue: MatchListComponentDefinition },
    { provide: WEB_COMPONENT_DEFINITIONS, multi: true, useValue: MathLiveComponentDefinition },
    // { provide: WEB_COMPONENT_DEFINITIONS, multi: true, useValue: MatrixComponentDefinition },
    // { provide: WEB_COMPONENT_DEFINITIONS, multi: true, useValue: PickerComponentDefinition },
    { provide: WEB_COMPONENT_DEFINITIONS, multi: true, useValue: RadioGroupComponentDefinition },
    { provide: WEB_COMPONENT_DEFINITIONS, multi: true, useValue: SortListComponentDefinition },
    { provide: WEB_COMPONENT_DEFINITIONS, multi: true, useValue: TextSelectComponentDefinition },
    // { provide: WEB_COMPONENT_DEFINITIONS, multi: true, useValue: TimerComponentDefinition },
];
