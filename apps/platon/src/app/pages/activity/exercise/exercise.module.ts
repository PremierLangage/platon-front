import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';


import { AppSharedLayoutModule } from '../../../shared/layout/layout.module';

import { ExerciseComponent } from './exercise.component';
import { ActivityComponent } from '../activity.component';
import { PlatonTextComponent } from '../platon-text/platon-text.component';

@NgModule ({

    imports: [
        FormsModule,
        CommonModule,
        MatCardModule,

        AppSharedLayoutModule,

        RouterModule.forChild([
            { path: ':id', component: ActivityComponent }
        ])

    ],

    declarations: [ExerciseComponent, ActivityComponent, PlatonTextComponent],
    providers: [],
})
export class ExerciseModule {
}
