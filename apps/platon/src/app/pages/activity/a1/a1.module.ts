import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { A1Component } from './a1.component';
import { IDynamicModule } from '@mcisse/nge/services'

import {ExerciseModule } from '../exercise/exercise.module';

@NgModule({
  imports: [
    CommonModule,
    ExerciseModule,
  ],
  declarations: [A1Component]
})
export class A1Module implements IDynamicModule {
    component = A1Component;
}
