import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { AppSharedLayoutModule } from '../../shared/layout/layout.module';
import { SafePipeModule } from '@platon/shared/utils';

import { CreateCourseComponent } from './create-course/create-course.component';
import { CourseListComponent } from './course-list.component';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        MatCardModule,
        SafePipeModule,
        HttpClientModule,
        MatButtonToggleModule,

        AppSharedLayoutModule,

        RouterModule.forChild([
            {
                path: '',
                component: CourseListComponent,
                children: [
                    { path: ':id', loadChildren: () => import('../course/course.module').then(m => m.CourseModule)}
                ]
            },
        ]),
    ],

    declarations: [CourseListComponent, CreateCourseComponent],
    providers: [],
})
export class CourseListModule {}
