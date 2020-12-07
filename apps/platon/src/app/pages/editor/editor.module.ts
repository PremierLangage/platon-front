
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { EditorComponent } from './editor.component';
import { EditorRoutingModule } from './editor-routing.module';


@NgModule({
    declarations: [EditorComponent],
    imports: [
        CommonModule,
        MatButtonModule,
        EditorRoutingModule,
    ],
    providers: [],
})
export class EditorModule {}
