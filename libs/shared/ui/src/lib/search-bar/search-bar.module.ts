import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';
import { NgArrayPipesModule } from 'ngx-pipes';

import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';

import { SearchBarComponent } from './search-bar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    NgArrayPipesModule,
    NzSpinModule,
    NzAutocompleteModule,
  ],
  declarations: [SearchBarComponent],
  exports: [SearchBarComponent]
})
export class SharedUiSearchBarModule { }
