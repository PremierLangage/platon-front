import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DocsPlayerRouteData } from '@platon/features/docs';

const routes: Routes = [
    {
        path: '**',
        pathMatch: 'full',
        loadChildren: () => import(/* webpackChunkName: "docs" */ '@platon/features/docs').then(m => m.FeaturesDocsModule),
        data: {
            root: 'assets/docs/developer/'
        } as DocsPlayerRouteData,

    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes, {
            enableTracing: false,
            initialNavigation: 'enabled',
            preloadingStrategy: PreloadAllModules
        }),
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
