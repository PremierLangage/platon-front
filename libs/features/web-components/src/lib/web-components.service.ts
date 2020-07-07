import { Injectable, Inject, Optional } from '@angular/core';
import { WebComponentDefinition, WEB_COMPONENT_DEFINITIONS } from './web-components';

@Injectable({providedIn: 'root'})
export class WebComponentsService {

    constructor(
        @Optional()
        @Inject(WEB_COMPONENT_DEFINITIONS)
        private readonly definitions: WebComponentDefinition[]
    ) {
        this.definitions = definitions || [];
    }

    createDocumentation() {
        return {
            name: 'Components',
            link: 'components',
            baseUrl: 'assets/docs/web-components',
            get: (path: string) => {
                if (path.startsWith('wc-')) {
                    path = path.replace('wc-', '');
                    path = `assets/docs/web-components/${path}/${path}`;
                } else {
                    path = `assets/docs/web-components/${path}`;
                }
                if (!path.endsWith('.md')) {
                    path += '.md';
                }
                return path;
            },
            navigation: [
                { title: 'Introduction', document: 'index.md' },
                {
                    title: 'Composants',
                    children: this.definitions.map(component => {
                        return {
                            title: component.name,
                            document: component.selector
                        }
                    })
                }

            ]
        };
    }

    findBySelector(selector: string): WebComponentDefinition|undefined {
        return this.definitions.find(e => e.selector === selector);
    }
}
