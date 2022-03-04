import { CUSTOM_ELEMENTS_SCHEMA, NgModule, Type } from '@angular/core';
import { BaseModule } from '../../shared/components/base/base.module';

import { PlatonViewerComponent } from './platon-viewer.component';

import { NzCardModule } from 'ng-zorro-antd/card';
import { PlatonPipe } from './platon.pipe';

@NgModule({
    declarations: [PlatonViewerComponent, PlatonPipe],
    imports: [BaseModule, NzCardModule],
    exports: [PlatonViewerComponent, PlatonPipe],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PlatonViewerModule {
    customElementComponent: Type<any> = PlatonViewerComponent;
}
