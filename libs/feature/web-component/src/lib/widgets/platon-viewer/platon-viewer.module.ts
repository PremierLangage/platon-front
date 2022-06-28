import { NgModule, Type } from '@angular/core';
import { IDynamicModule } from '@cisstech/nge/services';
import { ComponentPipeModule, SafePipeModule } from '@platon/shared/utils';

import { BaseModule } from '../../shared/components/base/base.module';
import { PlatonViewerComponent } from './platon-viewer.component';
import { PlatonViewerHandler } from './platon-viewer.directive';

@NgModule({
    declarations: [
        PlatonViewerComponent,
        PlatonViewerHandler
    ],
    imports: [
        BaseModule,

        SafePipeModule,
        ComponentPipeModule,

    ],
    exports: [PlatonViewerComponent],
})
export class PlatonViewerModule implements IDynamicModule {
    component: Type<any> = PlatonViewerComponent;
}
