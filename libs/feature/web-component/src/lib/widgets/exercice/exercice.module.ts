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
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzTabsModule } from 'ng-zorro-antd/tabs';

import { BaseModule } from '../../shared/components/base/base.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


import { PlatonViewerModule } from '../platon-viewer/platon-viewer.module';
import { ExerciceComponent } from './exercice.component';
import { ComponentExtractorPipe } from './component-extractor.pipe';
import { RadioGroupModule } from '../../forms/radio-group/radio-group.module';
import { ExerciceFeedbackComponent } from './exercice-feedback/exercice-feedback.component';


@NgModule({
    declarations: [ExerciceComponent, ComponentExtractorPipe, ExerciceFeedbackComponent],
    imports: [
        BaseModule,
        CommonModule,

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
        NzTypographyModule,
        NzIconModule,
        NzMenuModule,
        NzTabsModule,


        RadioGroupModule,

    ],
    exports: [ExerciceComponent, ExerciceFeedbackComponent],
})
export class ExerciceModule implements IDynamicModule {
    component: Type<any> = ExerciceComponent;
}