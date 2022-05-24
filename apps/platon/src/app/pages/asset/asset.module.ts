import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { FeatureWorkspaceModule } from '@platon/feature/workspace';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { AppSharedLayoutModule } from '../../shared/layout';
import { AssetRoutingModule } from './asset-routing.module';
import { AssetComponent } from './asset.component';

@NgModule({
    imports: [
        CommonModule,

        MatButtonModule,

        NzBreadCrumbModule,

        AppSharedLayoutModule,
        FeatureWorkspaceModule,
        AssetRoutingModule,
    ],
    declarations: [AssetComponent],
})
export class AssetModule {}
