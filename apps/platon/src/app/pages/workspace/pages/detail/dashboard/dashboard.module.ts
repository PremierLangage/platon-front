import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';

import { NzTagModule } from 'ng-zorro-antd/tag';

import { CoreAuthModule } from '@platon/core/auth';
import { FeatureWorkspaceModule } from '@platon/feature/workspace';

import { DashboardComponent } from './dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,

        RouterModule.forChild([
            {
                path: '',
                component: DashboardComponent,
            },
        ]),

        MatButtonModule,
        MatSelectModule,
        MatFormFieldModule,
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
