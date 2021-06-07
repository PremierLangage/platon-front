import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateModelComponent } from './create-model.component';
import { CreateModelRoutingModule } from './create-model-routing.module';

@NgModule({
  imports: [
    CommonModule,

    CreateModelRoutingModule
  ],
  declarations: [CreateModelComponent]
})
export class CreateModelModule { }
