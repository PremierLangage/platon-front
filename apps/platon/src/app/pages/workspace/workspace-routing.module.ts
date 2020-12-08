import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { WorkspaceComponent } from './workspace.component';
import { DetailPageData } from './pages/detail/detail.service';

const routes: Routes = [
    {
        path: '',
        component: WorkspaceComponent,
        children: [
            {
                path: 'search',
                loadChildren: () => import(
                    /* webpackChunkName: "workspace-search" */
                    './pages/search/search.module'
                ).then(m => m.SearchModule)
            },
            {
                path: 'activity',
                data: {
                    resourceType: 'ACTIVITY'
                } as DetailPageData,
                loadChildren: () => import(
                    /* webpackChunkName: "workspace-detail" */
                './pages/detail/detail.module'
                ).then(m => m.DetailModule)
            },
            {
                path: 'circle',
                data: {
                    resourceType: 'CIRCLE'
                } as DetailPageData,
                loadChildren: () => import(
                    /* webpackChunkName: "workspace-detail" */
                    './pages/detail/detail.module'
                ).then(m => m.DetailModule)
            },
            {
                path: 'exercise',
                data: {
                    resourceType: 'EXERCISE'
                } as DetailPageData,
                loadChildren: () => import(
                    /* webpackChunkName: "workspace-detail" */
                    './pages/detail/detail.module'
                ).then(m => m.DetailModule)
            },
            { path: '**', redirectTo: 'search', pathMatch: 'full' }
        ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class WorkspaceRoutingModule {}
