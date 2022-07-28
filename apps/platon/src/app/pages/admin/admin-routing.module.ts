import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzSpaceModule } from 'ng-zorro-antd/space';

import { AdminComponent } from './admin.component';
import { AdminCoursComponent } from './cours/admin-cours.component';
import { AdminActivityComponent } from './activity/admin-activity.component';
import { AdminExerciceComponent } from './exercice/admin-exercice.component';
import { FeatureWorkspaceModule } from '@platon/feature/workspace';
import { SharedUiCardModule } from '@platon/shared/ui/card';
import { AdminCoursEditComponent } from './cours/edit/admin-cours-edit.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
    {
        path: '',
        component: AdminComponent,
        children: [
            {
                path: 'cours',
                component: AdminCoursComponent,
            },
            {
                path: 'cours/edit',
                component: AdminCoursEditComponent,
            },
            {
                path: 'activity',
                component: AdminActivityComponent
            },
            {
                path: 'exercice',
                component: AdminExerciceComponent
            },
            { path: '**', redirectTo: 'cours', pathMatch: 'full' }
        ]
    },
];

@NgModule({
    declarations: [
        AdminCoursComponent,
        AdminCoursEditComponent,
        AdminActivityComponent,
        AdminExerciceComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,

        NzGridModule,
        NzButtonModule,
        NzInputModule,
        NzIconModule,
        NzDividerModule,
        NzLayoutModule,
        NzMenuModule,
        NzSpaceModule,


        SharedUiCardModule,
        RouterModule.forChild(routes),
    ],
    exports: [RouterModule]
})
export class AdminRoutingModule {}
