import { LazyComponentDef } from '@juristr/ngx-lazy-el';

export const WEB_COMPONENTS_REGISTRY: LazyComponentDef[] = [
    { selector: 'platon-input', loadChildren: () => import('./platon-input/platon-input.module').then(m => m.PlatonInputModule) },
];
