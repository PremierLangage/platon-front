import { NgModule, Type } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { MarkdownComponent } from './markdown.component';

@NgModule({
    declarations: [MarkdownComponent],
    imports: [
        SharedModule
    ],
    exports: [MarkdownComponent],
})
export class MarkdownModule {
    customElementComponent: Type<any> = MarkdownComponent;
}
