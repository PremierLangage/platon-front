import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ToolbarComponent } from './toolbar.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MatToolbarModule,
    ],
    exports: [
        ToolbarComponent,
    ],
    declarations: [
        ToolbarComponent,
    ]
})
export class ToolbarModule {}
