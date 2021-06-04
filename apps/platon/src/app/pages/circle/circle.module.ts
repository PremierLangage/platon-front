
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Libs
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzNotificationModule } from 'ng-zorro-antd/notification';

import { SharedModule } from '../../shared/shared.module';

// Module
import { CircleComponent } from './circle.component';
import { CircleRoutingModule } from './circle-routing.module';


@NgModule({
    declarations: [
        CircleComponent,
    ],
    imports: [
        CommonModule,

        MatIconModule,
        MatMenuModule,
        MatButtonModule,
        MatSelectModule,
        MatFormFieldModule,

        NzTabsModule,
        NzSkeletonModule,
        NzBreadCrumbModule,
        NzNotificationModule,

        SharedModule,

        CircleRoutingModule,
    ],
    providers: [],
})
export class CircleModule {}
