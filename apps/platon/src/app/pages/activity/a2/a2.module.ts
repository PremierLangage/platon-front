import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { A2Component } from './a2.component';
import { IDynamicModule } from '@mcisse/nge/services';

import {ExerciseModule } from '../exercise/exercise.module';

@NgModule({
  imports: [
    CommonModule,
    ExerciseModule
  ],
  declarations: [A2Component]
})
export class A2Module implements IDynamicModule {
    component = A2Component;
}
