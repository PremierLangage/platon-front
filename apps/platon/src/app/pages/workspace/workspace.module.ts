import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Libs
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzNotificationModule } from 'ng-zorro-antd/notification';

import { FeatureWorkspaceModule } from '@platon/feature/workspace';

import { AppSharedLayoutModule } from '../../shared/layout/layout.module';

// Module
import { WorkspaceComponent } from './workspace.component';
import { WorkspaceRoutingModule } from './workspace-routing.module';

@NgModule({
    imports: [
        CommonModule,

        MatIconModule,
        MatTabsModule,
        MatMenuModule,
        MatButtonModule,
        MatDividerModule,

        NzTabsModule,
        NzSkeletonModule,
        NzNotificationModule,

        AppSharedLayoutModule,

        FeatureWorkspaceModule,
        WorkspaceRoutingModule,
    ],
    declarations: [
        WorkspaceComponent,
    ],
})
export class WorkspaceModule { }
