import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { DetailComponent } from './detail.component';

const routes: Routes = [
    {
        path: ':id',
        component: DetailComponent,
        children: [
            {
                path: 'doc',
                loadChildren: () => import(
                    /* webpackChunkName: "workspace-detail-doc" */
                    './doc/doc.module'
                ).then(m => m.DocModule)
            },
            {
                path: 'settings',
                loadChildren: () => import(
                    /* webpackChunkName: "workspace-detail-settings" */
                    './settings/settings.module'
                ).then(m => m.SettingsModule)
            },
            {
                path: 'dashboard',
                loadChildren: () => import(
                    /* webpackChunkName: "workspace-detail-dashboard" */
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
export class DetailRoutingModule {}
