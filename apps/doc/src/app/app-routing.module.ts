import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { WebComponentDocumentationRoute } from '@platon/feature/web-component';
import { NgeDocSettings } from 'nge-doc';

const routes: Routes = [
    WebComponentDocumentationRoute,
    { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
    {
        path: 'developers',
        loadChildren: () => import('nge-doc').then(m => m.NgeDocModule),
        data: {
            meta: {
                name: 'PLaTon pour les développeurs',
                root: '/developers/',
                logo: 'assets/logo/platon.svg',
                url: 'https://premierlangage.github.io/platon-front/',
                backUrl: '/',
                repo: {
                    name: 'platon-front',
                    url: 'https://github.com/PremierLangage/platon-front'
                },
            },
         pages: [
            { title: 'Présentation', href: 'presentation', renderer: 'assets/docs/developers/index.md' }
         ],
        } as NgeDocSettings
    },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes, {
            anchorScrolling: 'enabled',
            scrollPositionRestoration: 'enabled',
            preloadingStrategy: PreloadAllModules
        }),
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
