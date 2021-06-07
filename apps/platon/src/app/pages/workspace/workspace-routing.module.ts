import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { WorkspaceComponent } from './workspace.component';

const routes: Routes = [
    {
        path: '',
        component: WorkspaceComponent,
        children: [
            {
                path: 'overview',
                loadChildren: () => import(
                    /* webpackChunkName: "worksapce-overview" */
                    './overview/overview.module'
                ).then(m => m.OverviewModule)
            },
            {
                path: 'circles',
                loadChildren: () => import(
                    /* webpackChunkName: "workspace-circles" */
                    '../circle-search/circle-search.module'
                ).then(m => m.CircleSearchModule)
            },
            {
                path: 'resources',
                loadChildren: () => import(
                    /* webpackChunkName: "workspace-resources" */
                    '../resource-search/resource-search.module'
                ).then(m => m.ResourceSearchModule)
            },
            { path: '**', redirectTo: 'overview', pathMatch: 'full' }
        ]
    },
    { path: '**', redirectTo: 'overview', pathMatch: 'full' }
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class WorkspaceRoutingModule { }
