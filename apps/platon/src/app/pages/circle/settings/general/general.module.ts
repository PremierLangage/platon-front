import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';

import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzSelectModule } from 'ng-zorro-antd/select';

import { GeneralComponent } from './general.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        MatInputModule,
        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,

        NzSpinModule,
        NzSelectModule,

        RouterModule.forChild([{ path: '', component: GeneralComponent }])
    ],
    declarations: [GeneralComponent]
})
export class GeneralModule { }
