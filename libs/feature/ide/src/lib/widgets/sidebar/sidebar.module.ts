import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarComponent } from './sidebar.component';
import { EditorSharedModule } from '../../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        EditorSharedModule
    ],
    exports: [
        SidebarComponent,
    ],
    declarations: [
        SidebarComponent,
    ]
})
export class SidebarModule {}
