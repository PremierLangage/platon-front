import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FeatureWorkspaceModule } from '@platon/feature/workspace';
import { ComponentPipeModule, SafePipeModule } from '@platon/shared/utils';
import { AppSharedLayoutModule } from '../../shared/layout';
import { LiveRoutingModule } from './live-routing.module';
import { LiveComponent } from './live.component';

import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { RadioGroupModule } from 'libs/feature/web-component/src/lib/forms/radio-group/radio-group.module';
import { PlatonViewerModule } from 'libs/feature/web-component/src/lib/widgets/platon-viewer/platon-viewer.module';

@NgModule({
    declarations: [LiveComponent],
    imports: [
        CommonModule,
        SafePipeModule,
        ComponentPipeModule,

        PlatonViewerModule,

        NzSpinModule,
        NzButtonModule,

        AppSharedLayoutModule,
        FeatureWorkspaceModule,

        LiveRoutingModule,
    ],
})
export class LiveModule {}
