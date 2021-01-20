import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzCascaderModule } from 'ng-zorro-antd/cascader';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';

import { NzStepsModule } from 'ng-zorro-antd/steps';

import { CoreAuthModule } from '@platon/core/auth';
import { SharedUiListModule } from '@platon/shared/ui/list';
import { FeatureWorkspaceModule } from '@platon/feature/workspace';


import { CreateCircleComponent } from './create-circle.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,


    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,

    NzIconModule,
    NzStepsModule,
    NzTabsModule,
    NzCascaderModule,
    NzSkeletonModule,
    NzPopconfirmModule,

    CoreAuthModule,
    SharedUiListModule,
    FeatureWorkspaceModule,


    RouterModule.forChild([
        { path: '', component: CreateCircleComponent }
    ])
  ],
  declarations: [CreateCircleComponent]
})
export class CreateCircleModule { }
