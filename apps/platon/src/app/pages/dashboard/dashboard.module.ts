import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { SharedUiSearchModule } from '@platon/shared/ui/search';

import { AppSharedLayoutModule } from '../../shared/layout/layout.module';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  imports: [
    CommonModule,

    MatIconModule,
    MatButtonModule,

    SharedUiSearchModule,

    AppSharedLayoutModule,
    DashboardRoutingModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
