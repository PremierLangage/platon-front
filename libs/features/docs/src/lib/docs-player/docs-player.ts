export interface DocsPlayerRouteData {
    root: string;
}

export interface SiteMap {
    site_name: string;
    site_description: string;
    site_author: string;
    site_url: string;
    repo_url: string;
    repo_name: string;
    copyright: string;
    pages: Record<string, {
        title: string;
        url: string;
    }>[]
}

/*
site_name: PLaTon
site_description: Developer documentation of PLaTon frontend project.
site_author: Mamadou Cisse
site_url: https://premierlangage.github.io/platon-front/

repo_url: https://github.com/PremierLangage/platon-front
repo_name: platon-front
copyright: Copyright &copy; 2016 - 2020 Martin Donath

pages:
  - getting-started:
    - title: Getting started
    - url: getting-started.md
  - angular-guide:
    - title: Angular Guide
    - url: angular-guide
  - project-structure:
    - title: Architecture
    - url: project-structure

 */
