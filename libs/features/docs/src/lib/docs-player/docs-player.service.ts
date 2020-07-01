import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DocsPlayerRouteData, SiteMap } from './docs-player';

import * as jsyaml from 'js-yaml';

@Injectable({providedIn: 'root'})
export class DocsPlayerService {

    constructor(private http: HttpClient) { }

    async loadSitemap(route: DocsPlayerRouteData): Promise<SiteMap> {
        if (!route.root.endsWith('/')) {
            route.root = route.root + '/';
        }

        const data = await this.http.get(route.root + 'sitemap.yaml', {
            responseType: 'text'
        }).toPromise();

        return jsyaml.safeLoad(data) as SiteMap;
    }
}
