import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FeatureWorkspaceModule } from '@platon/feature/workspace';
import { ComponentPipeModule, SafePipeModule } from '@platon/shared/utils';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { AppSharedLayoutModule } from '../../shared/layout';
import { LiveRoutingModule } from './live-routing.module';
import { LiveComponent } from './live.component';

@NgModule({
    declarations: [LiveComponent],
    imports: [
        CommonModule,
        SafePipeModule,
        ComponentPipeModule,

        NzSpinModule,

        AppSharedLayoutModule,
        FeatureWorkspaceModule,

        LiveRoutingModule,
    ],
})
export class LiveModule {}
