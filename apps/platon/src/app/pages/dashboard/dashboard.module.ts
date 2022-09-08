import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';

import { SharedUiSearchModule } from '@platon/shared/ui/search';

import { AppSharedLayoutModule } from '../../shared/layout/layout.module';
import { FeatureWorkspaceModule } from '@platon/feature/workspace';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
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
})
export class DashboardModule {}
