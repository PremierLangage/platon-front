import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { AppSharedLayoutModule } from '../../shared/layout/layout.module';
import { SafePipeModule } from '@platon/shared/utils';

import { CreateCourseComponent } from '../create-course/create-course.component';
import { CourseListComponent } from './course-list.component';
import { CourseLabelComponent } from '../course-label/course-label.component';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,

        MatCardModule,
        MatInputModule,
        MatFormFieldModule,
        MatButtonToggleModule,
        MatExpansionModule,
        MatDatepickerModule,
        MatNativeDateModule,

        SafePipeModule,
        AppSharedLayoutModule,

        RouterModule.forChild([
            { path: '', component: CourseListComponent}
        ]),
    ],

    declarations: [CourseListComponent, CreateCourseComponent, CourseLabelComponent],
    providers: [],
})
export class CourseListModule {}
