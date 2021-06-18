import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { AppSharedLayoutModule } from '../../shared/layout/layout.module';
import { SafePipeModule } from '@platon/shared/utils';

import { ActivityComponent } from './activity.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { PlatonTextComponent } from './platon-text/platon-text.component';

@NgModule ({

    imports: [
        FormsModule,
        CommonModule,
        MatCardModule,
        SafePipeModule,
        MatButtonToggleModule,


        AppSharedLayoutModule,

        RouterModule.forChild([
            { path: ':id', component: ActivityComponent }
        ])

    ],

    declarations: [ActivityComponent, ExerciseComponent, PlatonTextComponent],
    providers: [],
})
export class ActivityModule { }
