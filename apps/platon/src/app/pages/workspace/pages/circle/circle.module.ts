import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';

import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzNotificationModule } from 'ng-zorro-antd/notification';

import { CircleComponent } from './circle.component';
import { CircleRoutingModule } from './circle-routing.module';

@NgModule({
    imports: [
        CommonModule,

        MatIconModule,
        MatTabsModule,
        MatButtonModule,

        NzSkeletonModule,
        NzBreadCrumbModule,
        NzNotificationModule,

        CircleRoutingModule,
    ],
    declarations: [
        CircleComponent,
    ],
})
export class CircleModule {}
