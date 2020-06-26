import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Routes = [
    { path: 'drafts', loadChildren: () => import('./drafts/drafts.module').then(m => m.DraftsModule) },
    { path: '**', redirectTo: 'drafts', pathMatch: 'full' }
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
