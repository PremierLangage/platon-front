import { NgModule, Type } from '@angular/core';
import { NgeMonacoModule } from 'nge-monaco';
import { SharedModule } from '../../shared/shared.module';

import { CodeViewerComponent } from './code-viewer.component';

@NgModule({
    declarations: [CodeViewerComponent],
    imports: [
        SharedModule,
        NgeMonacoModule
    ],
    exports: [CodeViewerComponent],
})
export class CodeViewerModule {
    customElementComponent: Type<any> = CodeViewerComponent;
}
