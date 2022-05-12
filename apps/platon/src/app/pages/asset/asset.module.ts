import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetComponent } from './asset.component';
import { AssetRoutingModule } from './asset-routing.module';
import { FeatureWorkspaceModule } from '@platon/feature/workspace';
import { AppSharedLayoutModule } from '../../shared/layout/layout.module';

import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';

@NgModule({
    declarations: [AssetComponent],
    imports: [
        CommonModule,

        MatIconModule,
        MatMenuModule,
        NzBreadCrumbModule,

        AppSharedLayoutModule,
        FeatureWorkspaceModule,

        AssetRoutingModule,
    ],
    providers: [],
})
export class AssetModule {}
