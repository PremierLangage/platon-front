import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { CriteriaGridComponent } from './criteria-grid.component';
import { CriterionComponent } from './criterion/criterion.component';

@NgModule({
    imports: [
      FormsModule,
      CommonModule,
      MatCardModule,
      MatIconModule,
      MatButtonModule,
    ],
    declarations: [CriteriaGridComponent, CriterionComponent],
    exports: [
      CriteriaGridComponent
    ]
  })
export class CriteriaGridModule {
    customElementComponent: Type<any> = CriteriaGridComponent;
}
