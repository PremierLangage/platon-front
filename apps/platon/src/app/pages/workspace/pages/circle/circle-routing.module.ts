import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { CircleComponent } from './circle.component';

const routes: Routes = [
    {
        path: ':id',
        component: CircleComponent,
        children: [
            {
                path: 'doc',
                loadChildren: () => import(
                    /* webpackChunkName: "workspace-circle-doc" */
                    './doc/doc.module'
                ).then(m => m.DocModule)
            },            {
                path: 'forum',
                loadChildren: () => import(
                    /* webpackChunkName: "workspace-circle-forum" */
                    './forum/forum.module'
                ).then(m => m.ForumModule)
            },
            {
                path: 'settings',
                loadChildren: () => import(
                    /* webpackChunkName: "workspace-circle-settings" */
                    './settings/settings.module'
                ).then(m => m.SettingsModule)
            },
            {
                path: 'dashboard',
                loadChildren: () => import(
                    /* webpackChunkName: "workspace-circle-dashboard" */
                    './dashboard/dashboard.module'
                ).then(m => m.DashboardModule)
            },
            { path: '', redirectTo: 'dashboard' },
        ],
    },
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CircleRoutingModule {}
