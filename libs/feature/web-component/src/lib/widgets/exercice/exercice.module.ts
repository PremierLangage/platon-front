import { NgModule, Type } from '@angular/core';
import { IDynamicModule } from '@cisstech/nge/services';

import { ComponentPipeModule, SafePipeModule } from '@platon/shared/utils';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzSpaceModule } from 'ng-zorro-antd/space';


import { BaseModule } from '../../shared/components/base/base.module';
import { PlatonViewerModule } from '../platon-viewer/platon-viewer.module';
import { ExerciceComponent } from './exercice.component';
import { ComponentExtractorPipe } from './component-extractor.pipe';
import { RadioGroupModule } from '../../forms/radio-group/radio-group.module';



@NgModule({
    declarations: [ExerciceComponent, ComponentExtractorPipe],
    imports: [
        BaseModule,
        SafePipeModule,
        ComponentPipeModule,
        PlatonViewerModule,

        NzSpinModule,
        NzButtonModule,
        NzDividerModule,
        NzSpaceModule,
        RadioGroupModule
    ],
    exports: [ExerciceComponent],
})
export class ExerciceModule implements IDynamicModule {
    component: Type<any> = ExerciceComponent;
}
