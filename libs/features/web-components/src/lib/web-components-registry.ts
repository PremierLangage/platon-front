import { Provider } from '@angular/core';
import { LazyComponentDef } from '@juristr/ngx-lazy-el';
import { WEB_COMPONENT_DEFINITIONS } from './web-components';
import { TextInputComponentDefinition } from './text-input/text-input';

export const WEB_COMPONENTS_BUNDLES: LazyComponentDef[] = [
    { selector: 'wc-text-input', loadChildren: () => import('./text-input/text-input.module').then(m => m.TextInputModule) },
];

export const WEB_COMPONENTS_PROVIDERS: Provider[] = [
    { provide: WEB_COMPONENT_DEFINITIONS, multi: true, useValue: TextInputComponentDefinition },
];
