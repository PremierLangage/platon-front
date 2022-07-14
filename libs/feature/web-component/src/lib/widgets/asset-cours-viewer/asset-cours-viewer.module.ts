import { NgModule, Type } from '@angular/core';
import { IDynamicModule } from '@cisstech/nge/services';

import { MatIconModule } from '@angular/material/icon';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';

import { SharedUiListModule } from '@platon/shared/ui/list';

import { BaseModule } from '../../shared/components/base/base.module';
import { AssetCoursViewerComponent } from './asset-cours-viewer.component';

@NgModule({
    declarations: [AssetCoursViewerComponent],
    imports: [
        BaseModule,

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
