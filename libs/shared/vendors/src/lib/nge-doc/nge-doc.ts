import { Provider } from '@angular/core';
import { NGE_DOC_RENDERERS } from '@mcisse/nge/doc';

export const NgeDocProviders: Provider[] = [
    {
        provide: NGE_DOC_RENDERERS,
        useValue: {
            markdown: {
                component: () => import('@mcisse/nge/markdown').then((m) => m.NgeMarkdownComponent),
            },
        },
    }
];
