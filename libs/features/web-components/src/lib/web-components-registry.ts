import { Provider } from '@angular/core';
import { LazyComponentDef } from '@juristr/ngx-lazy-el';
import { WEB_COMPONENT_DEFINITIONS } from './web-components';
import { InputBoxComponentDefinition } from './forms/input-box/input-box';
import { CodeViewerComponentDefinition } from './widgets/code-viewer/code-viewer';

export const WEB_COMPONENTS_BUNDLES: LazyComponentDef[] = [
    { selector: 'wc-input-box', loadChildren: () => import('./forms/input-box/input-box.module').then(m => m.InputBoxModule) },
    { selector: 'wc-code-viewer', loadChildren: () => import('./widgets/code-viewer/code-viewer.module').then(m => m.CodeViewerModule) },
];

export const WEB_COMPONENTS_REGISTRY: Provider[] = [
    { provide: WEB_COMPONENT_DEFINITIONS, multi: true, useValue: InputBoxComponentDefinition },
    { provide: WEB_COMPONENT_DEFINITIONS, multi: true, useValue: CodeViewerComponentDefinition },
];
