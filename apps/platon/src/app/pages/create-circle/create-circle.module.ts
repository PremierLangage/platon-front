import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateCircleComponent } from './create-circle.component';
import { CreateCircleRoutingModule } from './create-circle-routing.module';

@NgModule({
  imports: [
    CommonModule,

    CreateCircleRoutingModule
  ],
  declarations: [CreateCircleComponent]
})
export class CreateCircleModule { }
