import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AngularSplitModule } from 'angular-split';
import { NgeMonacoModule } from 'nge-monaco';

import { SharedUiDialogModule } from '@platon/shared/ui';

import { EditorCoreModule } from './core/core.module';
import { IdeComponent } from './ide.component';
import { InfobarModule } from './widgets/infobar/infobar.module';
import { SidebarModule } from './widgets/sidebar/sidebar.module';
import { StatusbarModule } from './widgets/statusbar/statusbar.module';
import { ToolbarModule } from './widgets/toolbar/toolbar.module';
import { WorkbenchModule } from './widgets/workbench/workbench.module';
@NgModule({
    imports: [
        CommonModule,
        RouterModule,

        AngularSplitModule,
        NgeMonacoModule,

        SharedUiDialogModule,

        EditorCoreModule,
        InfobarModule,
        SidebarModule,
        ToolbarModule,
        StatusbarModule,
        WorkbenchModule,
    ],
    exports: [
        IdeComponent,
    ],
    declarations: [
        IdeComponent,
    ]
})
export class FeatureIdeModule {}
