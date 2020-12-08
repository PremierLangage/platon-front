import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

import { FeatureWorkspaceModule } from '@platon/feature/workspace';

import { DocComponent } from './doc.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        RouterModule.forChild([
            {
                path: '',
                component: DocComponent,
            },
        ]),

        MatInputModule,
        MatButtonModule,
        MatFormFieldModule,

        FeatureWorkspaceModule,
    ],
    exports: [],
    declarations: [DocComponent],
    providers: [],
})
export class DocModule { }
