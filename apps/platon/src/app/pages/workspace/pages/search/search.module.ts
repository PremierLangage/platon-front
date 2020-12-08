import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';

import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzEmptyModule } from 'ng-zorro-antd/empty';

import { SharedModule } from '../../../../shared/shared.module';
import { SharedUiListModule } from '@platon/shared/ui';
import { FeatureWorkspaceModule } from '@platon/feature/workspace';

import { SearchComponent } from './search.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        MatIconModule,
        MatRadioModule,
        MatInputModule,
        MatButtonModule,
        MatCheckboxModule,
        MatExpansionModule,
        MatFormFieldModule,

        NzSpinModule,
        NzEmptyModule,

        SharedModule,
        SharedUiListModule,
        FeatureWorkspaceModule,

        RouterModule.forChild([
            { path: '', component: SearchComponent }
        ]),
    ],
    declarations: [SearchComponent],
})
export class SearchModule {}
