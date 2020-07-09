import { NgModule, Type } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { CodeViewerComponent } from './code-viewer.component';

@NgModule({
    declarations: [CodeViewerComponent],
    imports: [
        SharedModule
    ],
    exports: [CodeViewerComponent],
})
export class CodeViewerModule {
    customElementComponent: Type<any> = CodeViewerComponent;
}
