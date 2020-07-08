import { Injectable, Inject, Optional } from '@angular/core';
import { WebComponentDefinition, WEB_COMPONENT_DEFINITIONS, WebComponentTypes } from './web-components';

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
            name: 'Composants',
            link: 'components',
            baseUrl: 'assets/docs/web-components',
            get: (path: string) => {
                if (path.startsWith('wc-')) {
                    const definition = this.findBySelector(path);
                    path = path.replace('wc-', '');
                    path = `assets/docs/web-components/${definition?.type}s/${path}/${path}`;
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
                    title: 'Forms',
                    children: this.definitions.filter(e => e.type === WebComponentTypes.form).map(e => {
                        return {
                            title: e.name,
                            document: e.selector
                        }
                    })
                },
                {
                    title: 'Widgets',
                    children: this.definitions.filter(e => e.type === WebComponentTypes.widget).map(e => {
                        return {
                            title: e.name,
                            document: e.selector
                        }
                    })
                },
            ]
        };
    }

    findBySelector(selector: string): WebComponentDefinition|undefined {
        return this.definitions.find(e => e.selector === selector);
    }
}
