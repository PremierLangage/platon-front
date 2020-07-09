import { Provider } from '@angular/core';
import { LazyComponentDef } from '@juristr/ngx-lazy-el';
import { WEB_COMPONENT_DEFINITIONS } from './web-components';
import { PanelComponentDefinition } from './widgets/panel/panel';
import { CodeViewerComponentDefinition } from './widgets/code-viewer/code-viewer';

export const WEB_COMPONENTS_BUNDLES: LazyComponentDef[] = [
    { selector: 'wc-panel', loadChildren: () => import('./widgets/panel/panel.module').then(m => m.PanelModule) },
    { selector: 'wc-code-viewer', loadChildren: () => import('./widgets/code-viewer/code-viewer.module').then(m => m.CodeViewerModule) },
];

export const WEB_COMPONENTS_PROVIDERS: Provider[] = [
    { provide: WEB_COMPONENT_DEFINITIONS, multi: true, useValue: PanelComponentDefinition },
    { provide: WEB_COMPONENT_DEFINITIONS, multi: true, useValue: CodeViewerComponentDefinition },
];
