import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { AppSharedLayoutModule } from '../../shared/layout/layout.module';
import { SafePipeModule } from '@platon/shared/utils';

import { CourseListComponent } from './course-list.component';
import { CourseModule } from './course/course.module';
import { ActivityModule } from './course/activity/activity.module';

@NgModule({
    imports: [
        CourseModule,
        ActivityModule,

        FormsModule,
        CommonModule,
        MatCardModule,
        SafePipeModule,
        MatButtonToggleModule,

        AppSharedLayoutModule,

        RouterModule.forChild([{ path: ':id', component: CourseListComponent }]),
    ],

    declarations: [CourseListComponent],
    providers: [],
})
export class CourseListModule {}

