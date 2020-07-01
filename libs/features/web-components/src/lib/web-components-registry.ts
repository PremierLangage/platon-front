import { LazyComponentDef } from '@juristr/ngx-lazy-el';

export const WEB_COMPONENTS_REGISTRY: LazyComponentDef[] = [
    { selector: 'wc-text-input', loadChildren: () => import('./text-input/text-input.module').then(m => m.TextInputModule) },
];