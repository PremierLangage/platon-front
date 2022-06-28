import { NgModule, Type } from '@angular/core';
import { IDynamicModule } from '@cisstech/nge/services';

import { ComponentPipeModule, SafePipeModule } from '@platon/shared/utils';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSliderModule } from 'ng-zorro-antd/slider';

import { BaseModule } from '../../shared/components/base/base.module';
import { PlatonViewerModule } from '../platon-viewer/platon-viewer.module';
import { ExerciceComponent } from './exercice.component';
import { ComponentExtractorPipe } from './component-extractor.pipe';
import { RadioGroupModule } from '../../forms/radio-group/radio-group.module';
import { ExerciceFeedbackComponent } from './exercice-feedback/exercice-feedback.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [ExerciceComponent, ComponentExtractorPipe, ExerciceFeedbackComponent],
    imports: [
        BaseModule,
        SafePipeModule,
        ComponentPipeModule,
        PlatonViewerModule,
        FormsModule,

        NzSpinModule,
        NzButtonModule,
        NzDividerModule,
        NzSpaceModule,
        NzLayoutModule,
        NzGridModule,
        NzProgressModule,
        NzSliderModule,


        RadioGroupModule,
    ],
    exports: [ExerciceComponent, ExerciceFeedbackComponent],
})
export class ExerciceModule implements IDynamicModule {
    component: Type<any> = ExerciceComponent;
}
