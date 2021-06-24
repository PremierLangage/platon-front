import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { AppSharedLayoutModule } from '../../../shared/layout/layout.module';
import { SafePipeModule } from '@platon/shared/utils';

import { CourseComponent } from './course.component';


@NgModule ({
    imports: [
        FormsModule,
        CommonModule,
        MatCardModule,
        SafePipeModule,
        MatButtonToggleModule,

        AppSharedLayoutModule,
    ],

    declarations: [CourseComponent],
    exports: [CourseComponent],
    providers: [],
})
export class CourseModule {}
