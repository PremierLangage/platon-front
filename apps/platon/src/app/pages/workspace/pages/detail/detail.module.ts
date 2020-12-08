import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzNotificationModule } from 'ng-zorro-antd/notification';

import { FeatureWorkspaceModule } from '@platon/feature/workspace';

import { DetailComponent } from './detail.component';
import { DetailRoutingModule } from './detail-routing.module';


@NgModule({
    imports: [
        CommonModule,

        MatIconModule,
        MatTabsModule,
        MatMenuModule,
        MatButtonModule,
        MatSelectModule,
        MatFormFieldModule,

        NzSkeletonModule,
        NzBreadCrumbModule,
        NzNotificationModule,

        FeatureWorkspaceModule,

        DetailRoutingModule,
    ],
    exports: [
        CommonModule,

        MatIconModule,
        MatTabsModule,
        MatMenuModule,
        MatButtonModule,

        NzSkeletonModule,
        NzBreadCrumbModule,
        NzNotificationModule,

        DetailComponent,
    ],
    declarations: [
        DetailComponent,
    ],
})
export class DetailModule { }
