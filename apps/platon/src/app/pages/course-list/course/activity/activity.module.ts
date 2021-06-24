import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { AppSharedLayoutModule } from '../../../../shared/layout/layout.module';
import { SafePipeModule } from '@platon/shared/utils';

import { ActivityComponent } from './activity.component';
import { ExerciseModule } from '../activity/exercise/exercise.module';

@NgModule({
    imports: [
        ExerciseModule,

        FormsModule,
        CommonModule,
        MatCardModule,
        SafePipeModule,
        MatButtonToggleModule,

        AppSharedLayoutModule,
    ],

    declarations: [ActivityComponent],
    exports: [ActivityComponent],
    providers: [],
})
export class ActivityModule {}
