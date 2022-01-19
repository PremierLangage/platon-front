import { NgModule, Type } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';

import { IDynamicModule } from '@mcisse/nge/services';
import { NgeMonacoModule } from '@mcisse/nge/monaco';

import { BaseModule } from '../../shared/components/base/base.module';
import { CodeEditorComponent } from './code-editor.component';

@NgModule({
    declarations: [CodeEditorComponent],
    imports: [
        BaseModule,
        MatTooltipModule,
        NgeMonacoModule,
    ],
    exports: [CodeEditorComponent],
})
export class CodeEditorModule implements IDynamicModule {
    component: Type<any> = CodeEditorComponent;
}
