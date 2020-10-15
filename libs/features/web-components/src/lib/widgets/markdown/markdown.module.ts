import { NgModule, Type } from '@angular/core';
import { NgeMarkdownModule } from 'nge-markdown';
import { SharedModule } from '../../shared/shared.module';

import { MarkdownComponent } from './markdown.component';

@NgModule({
    declarations: [MarkdownComponent],
    imports: [
        SharedModule,
        NgeMarkdownModule,
    ],
    exports: [MarkdownComponent],
})
export class MarkdownModule {
    customElementComponent: Type<any> = MarkdownComponent;
}
