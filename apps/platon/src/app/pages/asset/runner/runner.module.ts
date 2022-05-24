import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FeatureWorkspaceModule } from '@platon/feature/workspace';
import { RunnerComponent } from './runner.component';

@NgModule({
    imports: [
        CommonModule,

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
