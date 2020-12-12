import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdeComponent } from './ide.component';

@NgModule({
  imports: [CommonModule],
  exports: [
      IdeComponent
  ],
  declarations: [
      IdeComponent
  ]
})
export class FeatureIdeModule {}
