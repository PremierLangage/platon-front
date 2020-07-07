import { Injector } from '@angular/core';
import { WEB_COMPONENT_DEFINITIONS } from '../../web-components';

export function createWebComponentsDoc(injector: Injector) {
    const components = injector.get(WEB_COMPONENT_DEFINITIONS);
    return {
        name: 'Components',
        link: 'components',
        baseUrl: 'assets/docs/web-components',
        get: (path: string) => {
            if (path.startsWith('wc-')) {
                path = path.replace('wc-', '');
                return `assets/docs/web-components/${path}/${path}.md`;
            }
            return `assets/docs/web-components/${path}.md`
        },
        navigation: components.map(component => {
            return {
                title: component.name,
                document: component.selector
            }
        })
    };
}
