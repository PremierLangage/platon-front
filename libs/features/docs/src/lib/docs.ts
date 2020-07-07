import { Injector } from '@angular/core';

export interface DocsConfig {
    site?: SiteInfo;
    pages: (string | ((injector: Injector) => Promise<Page>))[];
}

export interface Menu {
    title: string;
    document?: string;
    children?: Menu[];
}

export interface Page {
    link: string;
    name: string;
    baseUrl: string;
    get?: (path: string) => string;
    navigation: Menu[];
}

export interface SiteMap extends SiteInfo {
    pages: Page[];
}

export interface SiteInfo {
    name?: string;
    description?: string;
    author?: string;
    url?: string;
    repo?: {
        url: string;
        name: string;
    };
    copyright?: string;
}
