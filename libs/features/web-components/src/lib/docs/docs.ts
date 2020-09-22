import { NgeDocLink, NgeDocSettings } from 'nge-doc';
import { WebComponentTypes } from '../web-components';
import { WebComponentsService } from '../web-components.service';

export const WebComponentsDocRoute =  {
    path: 'components',
    loadChildren: () => import('nge-doc').then(m => m.NgeDocModule),
    data: {
        meta: {
            name: 'Components',
            root: '/components/',
            url: 'https://premierlangage.github.io/platon-front/',
            repo: {
                name: 'platon-front',
                url: 'https://github.com/PremierLangage/platon-front'
            },
            copyright: 'Copyright © 2020 PLaTon'
        },
        pages: [
            (injector) => {
                const api = injector.get(WebComponentsService);
                return {
                    title: 'Forms',
                    href: 'forms',
                    renderer: '',
                    children: links(api, WebComponentTypes.form)
                };
            },
                (injector) => {
                const api = injector.get(WebComponentsService);
                return {
                    title: 'Widgets',
                    href: 'widgets',
                    renderer: '',
                    children: links(api, WebComponentTypes.widget)
                };
            }
        ],
        markdownRenderer: import('nge-markdown').then(m => m.NgeMarkdownComponent)
    } as NgeDocSettings,
};

function links(api: WebComponentsService, type: WebComponentTypes): NgeDocLink[] {
    return api.ofType(type).map(e => {
        const name = e.selector.replace('wc-', '');
        const path = `assets/docs/web-components/${type}s/${name}/${name}.md`;
        return {
            href: e.selector,
            title: e.name,
            renderer: path,
        }
    });
}
