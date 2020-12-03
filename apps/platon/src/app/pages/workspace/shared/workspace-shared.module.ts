import { NgModule } from '@angular/core';

import { SharedModule } from '../../../shared/shared.module';
import { FeatureWorkspaceModule } from '@platon/feature/workspace';

@NgModule({
    imports: [
        SharedModule,
        FeatureWorkspaceModule,
    ],
    exports: [
        SharedModule,
        FeatureWorkspaceModule,
    ],
    declarations: [],
})
export class WorkspaceSharedModule {}
