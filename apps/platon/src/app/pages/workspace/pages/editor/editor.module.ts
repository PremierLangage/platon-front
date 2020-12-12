
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';

import { FeatureIdeModule } from '@platon/feature/ide';

import { SharedModule } from '../../../../shared/shared.module';
import { EditorComponent } from './editor.component';
import { EditorRoutingModule } from './editor-routing.module';


@NgModule({
    declarations: [EditorComponent],
    imports: [
        CommonModule,
        MatButtonModule,
        EditorRoutingModule,

        SharedModule,
        FeatureIdeModule,
    ],
    providers: [],
})
export class EditorModule {}
