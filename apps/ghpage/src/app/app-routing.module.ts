import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { createWebComponentsDoc } from '@platon/features/web-components';

const routes: Routes = [
    {
        path: 'docs',
        loadChildren: () => import('@platon/features/docs').then(m => m.FeaturesDocsModule),
        data: {
            site: {
                name: 'Documentation PLaTon',
                description: 'Documentation technique du projet platon-front.',
                author: 'Mamadou Cisse',
                url: 'https://premierlangage.github.io/platon-front/',
                repo: {
                    name: 'platon-front',
                    url: 'https://github.com/PremierLangage/platon-front'
                },
                copyright: 'Copyright &copy; 2020 PLaTon'
            },
            pages: [
                'assets/docs/developers/',
                createWebComponentsDoc
            ],
        },
    },
    { path: '**', redirectTo: 'docs', pathMatch: 'full',}
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes, {
            anchorScrolling: 'enabled',
            preloadingStrategy: PreloadAllModules
        }),
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
