import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Libs
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzNotificationModule } from 'ng-zorro-antd/notification';

import { FeatureWorkspaceModule } from '@platon/feature/workspace';

import { AppSharedLayoutModule } from '../../shared/layout/layout.module';

// Module
import { WorkspaceComponent } from './workspace.component';
import { WorkspaceRoutingModule } from './workspace-routing.module';

@NgModule({
    imports: [
        CommonModule,

        MatIconModule,
        MatMenuModule,

        NzIconModule,
        NzTabsModule,
        NzButtonModule,
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
