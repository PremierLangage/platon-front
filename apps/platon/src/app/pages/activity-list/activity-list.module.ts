import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { AppSharedLayoutModule } from '../../shared/layout/layout.module';
import { SafePipeModule } from '@platon/shared/utils';

import { ActivityListComponent } from './activity-list.component';
import { CreateActivityComponent } from '../create-activity/create-activity.component';
import { ActivityLabelComponent } from '../activity-label/activity-label.component';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,

        MatCardModule,
        MatInputModule,
        MatFormFieldModule,
        MatButtonToggleModule,
        MatExpansionModule,

        SafePipeModule,
        AppSharedLayoutModule,


        RouterModule.forChild([{ path: '', component: ActivityListComponent }]),
    ],

    declarations: [ActivityListComponent, CreateActivityComponent, ActivityLabelComponent],
    exports: [ActivityListComponent],
    providers: [],
})
export class ActivityListModule {}
