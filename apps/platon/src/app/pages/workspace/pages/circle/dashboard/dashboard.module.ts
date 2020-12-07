import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';

import { NzTagModule } from 'ng-zorro-antd/tag';

import { CoreAuthModule } from '@platon/core/auth';
import { FeatureWorkspaceModule } from '@platon/feature/workspace';

import { DashboardComponent } from './dashboard.component';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: DashboardComponent,
            },
        ]),

        MatButtonModule,
        MatExpansionModule,

        NzTagModule,

        CoreAuthModule,
        FeatureWorkspaceModule,
    ],
    exports: [],
    declarations: [DashboardComponent],
    providers: [],
})
export class DashboardModule { }
