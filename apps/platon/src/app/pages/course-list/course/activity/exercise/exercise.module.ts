import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { SafePipeModule } from '@platon/shared/utils';
import { AppSharedLayoutModule } from '../../../../../shared/layout/layout.module';

import { PlatonTextModule } from '../../../platon-text/platon-text.module';
import { ExerciseComponent } from './exercise.component';
import { ActivityModule } from '../activity.module';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        MatCardModule,
        MatButtonToggleModule,

        ActivityModule,
        PlatonTextModule,

        AppSharedLayoutModule,

        RouterModule.forChild([{ path: ':id', component: ExerciseComponent }]),
    ],

    declarations: [ExerciseComponent],
    exports: [ExerciseComponent],
    providers: [],
})
export class ExerciseModule {}
