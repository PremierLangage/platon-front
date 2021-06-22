import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { AppSharedLayoutModule } from '../../../shared/layout/layout.module';
import { SafePipeModule } from '@platon/shared/utils';

import { CourseComponent } from './course.component';
import { ActivityModule } from './activity/activity.module';

@NgModule ({
    imports: [
        FormsModule,
        CommonModule,
        MatCardModule,
        ActivityModule,
        SafePipeModule,
        MatButtonToggleModule,

        AppSharedLayoutModule,

        RouterModule.forChild([{ path: ':id', component: CourseComponent }]),
    ],

    declarations: [CourseComponent],
    exports: [CourseComponent],
    providers: [],
})
export class CourseModule {}
