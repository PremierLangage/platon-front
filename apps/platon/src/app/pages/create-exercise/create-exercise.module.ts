import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateExerciseComponent } from './create-exercise.component';
import { CreateExerciseRoutingModule } from './create-exercise-routing.module';


@NgModule({
  imports: [
    CommonModule,

    CreateExerciseRoutingModule
  ],
  declarations: [CreateExerciseComponent]
})
export class CreateExerciseModule { }
