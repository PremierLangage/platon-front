import { Provider } from '@angular/core';
import { LazyComponentDef } from '@juristr/ngx-lazy-el';
import { WEB_COMPONENT_DEFINITIONS } from './web-components';
import { PanelComponentDefinition } from './widgets/panel/panel';

export const WEB_COMPONENTS_BUNDLES: LazyComponentDef[] = [
    { selector: 'wc-panel', loadChildren: () => import('./widgets/panel/panel.module').then(m => m.PanelModule) },
];

export const WEB_COMPONENTS_REGISTRY: Provider[] = [
    { provide: WEB_COMPONENT_DEFINITIONS, multi: true, useValue: PanelComponentDefinition },
];
