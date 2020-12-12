import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';

import { IdeComponent } from './ide.component';
import { InfobarComponent } from './components/infobar/infobar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { StatusbarComponent } from './components/statusbar/statusbar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { WorkbenchComponent } from './components/workbench/workbench.component';
import { CodeEditorComponent } from './components/workbench/code-editor/code-editor.component';
import { MediaEditorComponent } from './components/workbench/media-editor/media-editor.component';
import { PreviewEditorComponent } from './components/workbench/preview-editor/preview-editor.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,

        MatToolbarModule,
    ],
    exports: [
        IdeComponent,
    ],
    declarations: [
        IdeComponent,
        InfobarComponent,
        SidebarComponent,
        StatusbarComponent,
        ToolbarComponent,
        WorkbenchComponent,
        CodeEditorComponent,
        MediaEditorComponent,
        PreviewEditorComponent
    ]
})
export class FeatureIdeModule {}
