import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { CommonModule } from '@angular/common';
import { WebComponentDocumentationRoute } from '@platon/feature/web-component';

const routes: Routes = [
    WebComponentDocumentationRoute,
    {
        path: 'login',
        loadChildren: () => import(
            /* webpackChunkName: "login" */
            './pages/login/login.module'
        ).then(m => m.LoginModule)
    },
    { path: '**', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes, {
            enableTracing: false,
            preloadingStrategy: PreloadAllModules
        }),
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
