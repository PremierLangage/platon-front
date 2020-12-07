import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';

import { CoreAuthModule } from '@platon/core/auth';
import { SharedUiListModule } from '@platon/shared/ui';
import { FeatureWorkspaceModule } from '@platon/feature/workspace';

import { GeneralComponent } from './general/general.component';
import { SettingsComponent } from './settings.component';
import { MembersComponent} from './members/members.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        RouterModule.forChild([
            {
                path: '',
                component: SettingsComponent,
                children: [
                    { path: 'general', component: GeneralComponent },
                    { path: 'members', component: MembersComponent },
                    { path: '', redirectTo: 'general' }
                ]
            },
        ]),

        MatInputModule,
        MatButtonModule,
        MatTooltipModule,
        MatFormFieldModule,

        NzIconModule,
        NzTabsModule,
        NzSkeletonModule,
        NzPopconfirmModule,

        CoreAuthModule,
        SharedUiListModule,
        FeatureWorkspaceModule,
    ],
    exports: [],
    declarations: [GeneralComponent, SettingsComponent, MembersComponent],
    providers: [],
})
export class SettingsModule { }