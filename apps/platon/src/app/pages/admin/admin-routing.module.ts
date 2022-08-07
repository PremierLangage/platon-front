import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';

import { AdminComponent } from './admin.component';

const routes: Routes = [
    {
        path: '',
        component: AdminComponent,
        children: [
            {
                path: 'cours',
                loadChildren: () => import(
                    './cours/admin-cours.module'
                ).then(m => m.AdminCoursModule)
            },
            {
                path: 'cours/detail',
                loadChildren: () => import(
                    './cours-detail/admin-cours-detail.module'
                ).then(m => m.AdminCoursDetailModule)
            },
            {
                path: 'activity',
                loadChildren: () => import(
                    './activity/admin-activity.module'
                ).then(m => m.AdminActivityModule)
            },
            {
                path: 'exercice',
                loadChildren: () => import(
                    './exercice/admin-exercice.module'
                ).then(m => m.AdminExerciceModule)
            },
            { path: '**', redirectTo: 'cours', pathMatch: 'full' }
        ]
    },

];

@NgModule({
    imports: [
        CommonModule,

        NzLayoutModule,
        NzMenuModule,

        RouterModule.forChild(routes),
    ],
    exports: [RouterModule]
})
export class AdminRoutingModule {}
