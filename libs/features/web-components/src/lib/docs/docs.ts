import { NgeDocLink, NgeDocSettings } from 'nge-doc';
import { WebComponentTypes } from '../web-components';
import { WebComponentsService } from '../web-components.service';

export const WebComponentsDocRoute =  {
    path: 'components',
    loadChildren: () => import('nge-doc').then(m => m.NgeDocModule),
    data: {
        meta: {
            name: 'Composants PLaTon',
            root: '/components/',
            logo: 'assets/logo/platon.svg',
            url: 'https://premierlangage.github.io/platon-front/',
            repo: {
                name: 'platon-front',
                url: 'https://github.com/PremierLangage/platon-front'
            },
        },
        pages: [
            (injector: any) => {
                const api = injector.get(WebComponentsService);
                return {
                    title: 'Forms',
                    href: 'forms',
                    renderer: '',
                    children: links(api, WebComponentTypes.form)
                };
            },
            (injector: any) => {
                const api = injector.get(WebComponentsService);
                return {
                    title: 'Widgets',
                    href: 'widgets',
                    renderer: '',
                    children: links(api, WebComponentTypes.widget)
                };
            }
        ] ,
    } as NgeDocSettings,
};

function links(api: WebComponentsService, type: WebComponentTypes): NgeDocLink[] {
    return api.ofType(type).map(e => {
        return {
            href: e.selector,
            title: e.name,
            icon: e.icon,
            renderer: () => import('./docs.module').then(m => m.DocsModule),
            inputs: {
                definition: e
            }
        }
    });
}
