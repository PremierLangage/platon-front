import { NgModule, Type } from '@angular/core';
import { IDynamicModule } from '@cisstech/nge/services';

import { MatIconModule } from '@angular/material/icon';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';

import { SharedUiListModule } from '@platon/shared/ui/list';

import { BaseModule } from '../../shared/components/base/base.module';
import { AssetCoursViewerComponent } from './asset-cours-viewer.component';
import { AssetIconPipeModule } from '../../shared/pipes/asset-icon.pipe';

@NgModule({
    declarations: [AssetCoursViewerComponent],
    imports: [
        BaseModule,
        AssetIconPipeModule,

        MatIconModule,
        NzEmptyModule,
        NzSkeletonModule,

        SharedUiListModule
    ],
    exports: [AssetCoursViewerComponent],
})
export class AssetCoursViewerModule implements IDynamicModule {
    component: Type<any> = AssetCoursViewerComponent;
}
