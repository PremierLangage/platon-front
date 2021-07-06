import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { SafePipeModule } from '@platon/shared/utils';
import { AppSharedLayoutModule } from '../../shared/layout/layout.module';

import { ActivityComponent } from './activity.component';
import { ActivityRoutingModule } from './activity-routing.module';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        MatIconModule,
        MatMenuModule,
        MatCardModule,
        SafePipeModule,
        NzButtonModule,
        MatButtonToggleModule,

        ActivityRoutingModule,
        AppSharedLayoutModule,
    ],

    declarations: [ActivityComponent],
    exports: [ActivityComponent],
    providers: [],
})
export class ActivityModule {}
