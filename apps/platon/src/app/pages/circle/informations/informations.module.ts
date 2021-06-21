import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';

import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSelectModule } from 'ng-zorro-antd/select';

import { InformationsComponent } from './informations.component';

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
        NzFormModule,
        NzSelectModule,

        RouterModule.forChild([{ path: '', component: InformationsComponent }])
    ],
    declarations: [InformationsComponent]
})
export class InformationsModule { }
