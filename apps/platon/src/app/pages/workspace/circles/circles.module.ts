import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Libs
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';


import { NzSpinModule } from 'ng-zorro-antd/spin'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzNotificationModule } from 'ng-zorro-antd/notification';

import { SharedUiSearchModule } from '@platon/shared/ui/search';
import { FeatureWorkspaceModule } from '@platon/feature/workspace';

// Module
import { CirclesComponent } from './circles.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        MatIconModule,
        MatTabsModule,
        MatMenuModule,
        MatButtonModule,
        MatDividerModule,
        MatExpansionModule,

        NzSpinModule,
        NzGridModule,
        NzTabsModule,
        NzButtonModule,
        NzDividerModule,
        NzSkeletonModule,
        NzNotificationModule,

        SharedUiSearchModule,
        FeatureWorkspaceModule,

        RouterModule.forChild([
            {
                path: '',
                component: CirclesComponent
            }
        ])
    ],
    declarations: [CirclesComponent]
})
export class CirclesModule { }
