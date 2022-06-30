import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FeatureWorkspaceModule } from '@platon/feature/workspace';
import { ComponentPipeModule, SafePipeModule } from '@platon/shared/utils';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { RunnerComponent } from './runner.component';

@NgModule({
    imports: [
        CommonModule,
        SafePipeModule,
        ComponentPipeModule,

        NzSkeletonModule,

        FeatureWorkspaceModule,

        RouterModule.forChild([
            {
                path: '',
                component: RunnerComponent,
            },
        ]),
    ],
    declarations: [RunnerComponent],
})
export class RunnerModule {}
