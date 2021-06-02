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
                    './circles/circles.module'
                ).then(m => m.CirclesModule)
            },
            {
                path: 'resources',
                loadChildren: () => import(
                    /* webpackChunkName: "workspace-resources" */
                    './resources/resources.module'
                ).then(m => m.ResourcesModule)
            },
            { path: '**', redirectTo: 'overview', pathMatch: 'full' }
        ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class WorkspaceRoutingModule { }
