import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { DocsConfig, SiteMap, Page, Menu } from './docs';
import { BehaviorSubject, Observable } from 'rxjs';
import * as jsyaml from 'js-yaml';

@Injectable({ providedIn: 'root' })
export class DocsService {
    private readonly sitemap$ = new BehaviorSubject<SiteMap|undefined>(undefined);
    private readonly activePage$ = new BehaviorSubject<Page|undefined>(undefined);

    get sitemap(): Observable<SiteMap|undefined> {
        return this.sitemap$.asObservable();
    }

    get activePage(): Observable<Page|undefined> {
        return this.activePage$.asObservable();
    }

    constructor(
        private readonly http: HttpClient,
        private readonly injector: Injector
    ) { }

    async loadSitemap(config: DocsConfig): Promise<void> {
        function buildMenu(menu: Menu, page: Page) {
            if (menu.children) {
                menu.children.forEach(child => buildMenu(child, page));
            } else if (menu.document) {
                menu.document = page.link + menu.document;
            }
        }

        const pages: Page[] = [];

        for (let object of config.pages) {
            let page: Page|undefined;
            if (typeof(object) === 'string') {
                if (!object.endsWith('/')) {
                    object += '/';
                }
                const response = await this.http.get(object + 'page.yaml', {
                    responseType: 'text'
                }).toPromise();
                page = jsyaml.safeLoad(response) as Page;
                page.baseUrl = object;
            } else {
                page = await object(this.injector);
                if (!page.baseUrl.endsWith('/')) {
                    page.baseUrl += '/';
                }
            }
            if (page) {
                if (!page.link.endsWith('/')) {
                    page.link += '/';
                }
                for (const menu of page.navigation) {
                    buildMenu(menu, page);
                }
                pages.push(page);
            }
            // TODO handle error
        }

        const sitemap: SiteMap = {
            pages,
            url: config.site?.url,
            name: config.site?.name,
            repo: config.site?.repo,
            author: config.site?.author,
            copyright: config.site?.copyright,
            description: config.site?.description,
        };

        this.sitemap$.next(sitemap);

        if (sitemap.pages.length) {
            this.activePage$.next(sitemap.pages[0]);
        }
    }

    async loadDocument(route: ActivatedRoute) {
        const pages = this.sitemap$.value?.pages || [];
        if (!pages.length) {
            return undefined;
        }

        const { snapshot } = route;
        let path = snapshot.url.map(
            segment => segment.path
        ).join('/');

        if (!path.trim()) { // DEFAULT PAGE
            path = pages[0].link;
        }

        const components = path.split('/');
        const page = pages.find(e => e.link.startsWith(components[0]));
        if (!page) {
            return undefined;
        }

        // remove the alias from the page
        path = components.slice(1).join('/');
        if (!path.trim()) {
            path = 'index';
        }

        if (page.get) {
            path = page.get(path);
        } else {
            path = page.baseUrl + path;
        }

        if (!path.endsWith('.md')) {
            path += '.md';
        }

        setTimeout(() => {
            if (this.activePage$.value !== page) {
                this.activePage$.next(page);
            }
        }, 30);

        return await this.http.get(path, {
            responseType: 'text'
        }).toPromise();
    }

    isActivePage(page: Page) {
        return this.activePage$.value && this.activePage$.value === page;
    }

}
