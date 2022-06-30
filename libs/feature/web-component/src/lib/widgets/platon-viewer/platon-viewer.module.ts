import { NgModule, Type } from '@angular/core';
import { IDynamicModule } from '@cisstech/nge/services';
import { ComponentPipeModule, SafePipeModule } from '@platon/shared/utils';

import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';

import { BaseModule } from '../../shared/components/base/base.module';
import { PlatonViewerComponent } from './platon-viewer.component';

@NgModule({
    declarations: [PlatonViewerComponent],
    imports: [
        BaseModule,

        NzSkeletonModule,

        ComponentPipeModule,
        SafePipeModule,
    ],
    exports: [PlatonViewerComponent],
})
export class PlatonViewerModule implements IDynamicModule {
    component: Type<any> = PlatonViewerComponent;
}
