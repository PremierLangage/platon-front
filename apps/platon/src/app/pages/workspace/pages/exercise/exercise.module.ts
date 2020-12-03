import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { WorkspaceSharedModule } from '../../shared/workspace-shared.module';

import { ExerciseComponent } from './exercise.component';
import { CreateExerciseFormComponent } from './create-exercise-form/create-exercise-form.component';

@NgModule({
    imports: [
        WorkspaceSharedModule,
        RouterModule.forChild([
            { path: ':id', component: ExerciseComponent }
        ]),
    ],
    declarations: [ExerciseComponent, CreateExerciseFormComponent],
})
export class ExerciseModule {}
