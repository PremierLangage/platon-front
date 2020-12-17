import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebComponentDocumentationRoute } from '@platon/feature/web-component';
import { NgeDocSettings } from 'nge-doc';
import { DocComponent } from './doc.component';

const routes: Routes = [
    { path: 'home', component: DocComponent },
    WebComponentDocumentationRoute,
    {
        path: 'developers',
        loadChildren: () => import('nge-doc').then(m => m.NgeDocModule),
        data: {
            meta: {
                name: 'PLaTon pour les développeurs',
                root: '/doc/developers/',
                logo: 'assets/images/logo/platon.svg',
                url: 'https://premierlangage.github.io/platon-front/',
                backUrl: '/doc',
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
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ],
    exports: [RouterModule]
})
export class DocRoutingModule {}
