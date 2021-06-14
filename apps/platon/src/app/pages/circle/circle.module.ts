
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Libs
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzNotificationModule } from 'ng-zorro-antd/notification';

import { AppSharedLayoutModule } from '../../shared/layout/layout.module';

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
        MatTooltipModule,

        NzIconModule,
        NzButtonModule,
        NzBreadCrumbModule,
        NzNotificationModule,

        AppSharedLayoutModule,

        CircleRoutingModule,
    ],
    providers: [],
})
export class CircleModule {}
