import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { WorkbenchComponent } from './workbench.component';
import { CodeEditorComponent } from './/code-editor/code-editor.component';
import { MediaEditorComponent } from './/media-editor/media-editor.component';
import { PreviewEditorComponent } from './/preview-editor/preview-editor.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    exports: [
        WorkbenchComponent,
    ],
    declarations: [
        WorkbenchComponent,
        CodeEditorComponent,
        MediaEditorComponent,
        PreviewEditorComponent
    ]
})
export class WorkbenchModule {}
