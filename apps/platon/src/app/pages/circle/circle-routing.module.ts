import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CircleComponent } from './circle.component';

const routes: Routes = [
    {
        path: ':id',
        component: CircleComponent,
        children: [
            {
                path: 'overview',
                loadChildren: () => import(
                    /* webpackChunkName: "circle-overview" */
                    './overview/overview.module'
                ).then(m => m.OverviewModule)
            },
            {
                path: 'resources',
                loadChildren: () => import(
                    /* webpackChunkName: "circle-resources" */
                    '../resource-search/resource-search.module'
                ).then(m => m.ResourceSearchModule)
            },
            {
                path: 'members',
                loadChildren: () => import(
                    /* webpackChunkName: "circle-members" */
                    './members/members.module'
                ).then(m => m.MembersModule)
            },
            {
                path: 'informations',
                loadChildren: () => import(
                    /* webpackChunkName: "circle-informations" */
                    './informations/informations.module'
                ).then(m => m.InformationsModule)
            },
            { path: '**', redirectTo: 'overview', pathMatch: 'full' }
        ]
    },
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ],
    exports: [RouterModule]
})
export class CircleRoutingModule { }
