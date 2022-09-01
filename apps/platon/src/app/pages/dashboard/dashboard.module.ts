import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
<<<<<<< HEAD
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
=======
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
>>>>>>> develop-asset-update

import { SharedUiSearchModule } from '@platon/shared/ui/search';

import { AppSharedLayoutModule } from '../../shared/layout/layout.module';
import { FeatureWorkspaceModule } from '@platon/feature/workspace';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
<<<<<<< HEAD
import { FeatureWorkspaceModule } from '@platon/feature/workspace';

@NgModule({
    imports: [
        CommonModule,

        MatIconModule,
        MatButtonModule,
        NzEmptyModule,
        NzCardModule,
        NzGridModule,

        SharedUiSearchModule,

        AppSharedLayoutModule,
        DashboardRoutingModule,
        FeatureWorkspaceModule,
    ],
    declarations: [DashboardComponent],
=======
import { SharedUiCardModule } from '@platon/shared/ui/card';

@NgModule({
  imports: [
    CommonModule,

    MatIconModule,
    MatButtonModule,
    NzEmptyModule,
    NzSkeletonModule,

    SharedUiCardModule,
    SharedUiSearchModule,

    AppSharedLayoutModule,
    FeatureWorkspaceModule,

    DashboardRoutingModule
  ],
  declarations: [DashboardComponent]
>>>>>>> develop-asset-update
})
export class DashboardModule {}
