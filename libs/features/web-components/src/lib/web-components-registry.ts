import { Provider } from '@angular/core';
import { LazyComponentDef } from '@juristr/ngx-lazy-el';
import { WEB_COMPONENT_DEFINITIONS } from './web-components';
import { TextInputComponentDefinition } from './text-input/text-input';
import { CriteriaGridComponentDefinition } from './criteria-grid/criteria-grid';

export const WEB_COMPONENTS_BUNDLES: LazyComponentDef[] = [
    { selector: 'wc-text-input', loadChildren: () => import('./text-input/text-input.module').then(m => m.TextInputModule) },    { selector: 'wc-criteria-grid', loadChildren: () => import('./criteria-grid/criteria-grid.module').then(m => m.CriteriaGridModule) },

];

export const WEB_COMPONENTS_PROVIDERS: Provider[] = [
    { provide: WEB_COMPONENT_DEFINITIONS, multi: true, useValue: TextInputComponentDefinition },    { provide: WEB_COMPONENT_DEFINITIONS, multi: true, useValue: CriteriaGridComponentDefinition },

];
