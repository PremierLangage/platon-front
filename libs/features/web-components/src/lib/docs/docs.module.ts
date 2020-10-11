import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocsComponent } from './docs.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { NgeMarkdownModule } from 'nge-markdown';
import { NgJsonEditorModule } from 'ang-jsoneditor'
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    NgeMarkdownModule,
    NgJsonEditorModule,
    MatTooltipModule,
  ],
  declarations: [DocsComponent, ShowcaseComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DocsModule {
    component = DocsComponent;
}
