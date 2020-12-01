import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { WorkspaceSharedModule } from '../../shared/workspace-shared.module';

import { ExercisesComponent } from './exercises.component';
import { CreateExerciseFormComponent } from './create-exercise-form/create-exercise-form.component';

@NgModule({
    imports: [
        WorkspaceSharedModule,
        RouterModule.forChild([
            { path: '', component: ExercisesComponent }
        ]),
    ],
    declarations: [ExercisesComponent, CreateExerciseFormComponent],
})
export class ExercisesModule {}
