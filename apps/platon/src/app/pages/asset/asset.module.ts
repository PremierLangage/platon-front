import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetComponent } from './asset.component';
import { AssetRoutingModule } from './asset-routing.module';
import { FeatureWorkspaceModule } from '@platon/feature/workspace';
import { AppSharedLayoutModule } from '../../shared/layout/layout.module';

@NgModule({
    declarations: [AssetComponent],
    imports: [
        CommonModule,

        AppSharedLayoutModule,
        FeatureWorkspaceModule,

        AssetRoutingModule,
    ],
    providers: [],
})
export class AssetModule {}
