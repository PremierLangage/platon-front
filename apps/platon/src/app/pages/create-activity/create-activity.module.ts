import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateActivityComponent } from './create-activity.component';
import { CreateActivityRoutingModule } from './create-activity-routing.module';

@NgModule({
  imports: [
    CommonModule,

    CreateActivityRoutingModule
  ],
  declarations: [CreateActivityComponent]
})
export class CreateActivityModule { }
