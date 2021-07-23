
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Libs
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';

import { AppSharedLayoutModule } from '../../shared/layout/layout.module';
import { FeatureWorkspaceModule } from '@platon/feature/workspace';


import { ResourceComponent } from './resource.component';
import { ResourceRoutingModule } from './resource-routing.module';

@NgModule({
    declarations: [ResourceComponent],
    imports: [
        CommonModule,

        MatIconModule,
        MatMenuModule,
        MatTooltipModule,

        NzIconModule,
        NzButtonModule,
        NzMessageModule,
        NzBreadCrumbModule,

        AppSharedLayoutModule,
        FeatureWorkspaceModule,

        ResourceRoutingModule,
    ],
})
export class ResourceModule {}
