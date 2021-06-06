
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Libs
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzNotificationModule } from 'ng-zorro-antd/notification';

import { AppSharedErrorModule } from '../../shared/error/error.module';
import { AppSharedLayoutModule } from '../../shared/layout/layout.module';

// Module
import { CircleComponent } from './circle.component';
import { CircleHeaderComponent } from './circle-header/circle-header.component';
import { CircleRoutingModule } from './circle-routing.module';


@NgModule({
    declarations: [
        CircleComponent,
        CircleHeaderComponent,
    ],
    imports: [
        CommonModule,

        MatIconModule,
        MatMenuModule,
        MatButtonModule,
        MatSelectModule,
        MatFormFieldModule,

        NzTagModule,
        NzIconModule,
        NzTabsModule,
        NzButtonModule,
        NzResultModule,
        NzSkeletonModule,
        NzBreadCrumbModule,
        NzNotificationModule,

        AppSharedErrorModule,
        AppSharedLayoutModule,

        CircleRoutingModule,
    ],
    providers: [],
})
export class CircleModule {}
