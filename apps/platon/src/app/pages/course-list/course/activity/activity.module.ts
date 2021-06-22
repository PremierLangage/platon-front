import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { AppSharedLayoutModule } from '../../../../shared/layout/layout.module';
import { SafePipeModule } from '@platon/shared/utils';

import { PlatonTextModule } from '../../platon-text/platon-text.module';
import { ActivityComponent } from './activity.component';
import { ExerciseModule } from './exercise/exercise.module';
import { CourseModule } from '../course.module';

@NgModule({
    imports: [
        PlatonTextModule,
        ExerciseModule,
        CourseModule,

        FormsModule,
        CommonModule,
        MatCardModule,
        SafePipeModule,
        MatButtonToggleModule,

        AppSharedLayoutModule,

        RouterModule.forChild([{ path: ':id', component: ActivityComponent }]),
    ],

    declarations: [ActivityComponent],
    exports: [ActivityComponent],
    providers: [],
})
export class ActivityModule {}
