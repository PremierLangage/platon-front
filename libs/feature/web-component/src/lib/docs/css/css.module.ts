import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CssComponent } from './css.component';
import { NgeMarkdownModule } from '@mcisse/nge/markdown';
import { SharedUiDialogModule } from '@platon/shared/ui/dialog';

@NgModule({
  imports: [
    CommonModule,
    NgeMarkdownModule,
    SharedUiDialogModule,
  ],
  declarations: [CssComponent]
})
export class CssModule {
    component = CssComponent;
}
