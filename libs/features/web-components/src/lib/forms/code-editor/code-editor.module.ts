import { NgModule, Type } from '@angular/core';
import { NgeMonacoModule } from 'nge-monaco';
import { BaseModule } from '../../shared//components/base/base.module';

import { CodeEditorComponent } from './code-editor.component';

@NgModule({
    declarations: [CodeEditorComponent],
    imports: [
        BaseModule,
        NgeMonacoModule,
    ],
    exports: [CodeEditorComponent],
})
export class CodeEditorModule {
    customElementComponent: Type<any> = CodeEditorComponent;
}
