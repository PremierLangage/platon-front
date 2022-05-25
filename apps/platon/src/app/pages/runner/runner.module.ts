import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FeatureWorkspaceModule } from '@platon/feature/workspace';
import { BaseModule } from 'libs/feature/web-component/src/lib/shared/components/base/base.module';
import { AppSharedLayoutModule } from '../../shared/layout';
import { RunnerRoutingModule } from './runner-routing.module';
import { RunnerComponent } from './runner.component';

@NgModule({
    declarations: [RunnerComponent],
    imports: [
        CommonModule,

        AppSharedLayoutModule,
        FeatureWorkspaceModule,
        RunnerRoutingModule,
    ],
})
export class RunnerModule {}
