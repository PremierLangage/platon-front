import { NgModule, Type } from '@angular/core';
import { NgeMonacoModule } from 'nge-monaco';
import { SharedModule } from '../../shared/shared.module';

import { CodeEditorComponent } from './code-editor.component';

@NgModule({
    declarations: [CodeEditorComponent],
    imports: [
        SharedModule,
        NgeMonacoModule,
    ],
    exports: [CodeEditorComponent],
})
export class CodeEditorModule {
    customElementComponent: Type<any> = CodeEditorComponent;
}
