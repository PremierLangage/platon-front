import { NgModule, Type } from '@angular/core';
import { IDynamicModule } from '@cisstech/nge/services';

import { BaseModule } from '../../shared/components/base/base.module';
import { PlatonViewerComponent } from './platon-viewer.component';

@NgModule({
    declarations: [PlatonViewerComponent],
    imports: [
        BaseModule
    ],
    exports: [PlatonViewerComponent],
})
export class PlatonViewerModule implements IDynamicModule {
    component: Type<any> = PlatonViewerComponent;
}
