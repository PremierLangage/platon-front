import { NGE_DOC_RENDERERS } from 'nge-doc';

export const NgeDocRenderers = {
    provide: NGE_DOC_RENDERERS,
    useValue: {
        markdown: {
            component: () =>
                import('nge-markdown').then((m) => m.NgeMarkdownComponent),
        },
    },
};
