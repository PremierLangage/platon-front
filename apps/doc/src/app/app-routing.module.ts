import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { WebComponentsDocRoute } from '@platon/features/web-components';

const routes: Routes = [
    { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
    WebComponentsDocRoute,
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
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
