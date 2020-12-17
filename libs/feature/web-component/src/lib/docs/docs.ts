import { NgeDocLink, NgeDocSettings } from 'nge-doc';
import { WebComponentTypes } from '../web-component';
import { WebComponentService } from '../web-component.service';

export const WebComponentDocumentationRoute =  {
    path: 'components',
    loadChildren: () => import('nge-doc').then(m => m.NgeDocModule),
    data: {
        meta: {
            name: 'Composants PLaTon',
            root: '/doc/components/',
            logo: 'assets/images/logo/platon.svg',
            url: 'https://premierlangage.github.io/platon-front/',
            backUrl: '/doc',
            repo: {
                name: 'platon-front',
                url: 'https://github.com/PremierLangage/platon-front'
            },
        },
        pages: [
            // { title: 'Présentation', href: 'presentation', renderer: 'assets/docs/components/docs/presentation.md' },
            // { title: 'Utilisation', href: 'usage', renderer: 'assets/docs/components/docs/usage.md'  },
            // { title: 'API CSS', href: 'css-api', renderer: () => import('./css/css.module').then(m => m.CssModule) },
            (injector: any) => {
                const api = injector.get(WebComponentService);
                return {
                    title: 'Forms',
                    href: 'forms',
                    renderer: () => import('./listing/listing.module').then(m => m.ListingModule),
                    inputs: { type: WebComponentTypes.form },
                    children: links(api, WebComponentTypes.form),
                };
            },
            (injector: any) => {
                const api = injector.get(WebComponentService);
                return {
                    title: 'Widgets',
                    href: 'widgets',
                    renderer: () => import('./listing/listing.module').then(m => m.ListingModule),
                    inputs: { type: WebComponentTypes.widget },
                    children: links(api, WebComponentTypes.widget)
                };
            }
        ] ,
    } as NgeDocSettings,
};

function links(api: WebComponentService, type: WebComponentTypes): NgeDocLink[] {
    return api.ofType(type).map(e => {
        const name = e.selector.replace('wc-', '');
        return {
            href: e.selector,
            title: e.name,
            icon: e.icon,
            renderer: () => import('./docs.module').then(m => m.DocsModule),
            actions: [
                {
                    title: 'Éditer sur Github',
                    icon: 'https://icongr.am/octicons/mark-github.svg',
                    run: `https://github.com/PremierLangage/platon-front/blob/master/libs/features/web-components/src/lib/${type}s/${name}`
                }
            ],
            inputs: {
                definition: e
            }
        }
    });
}
