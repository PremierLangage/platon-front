import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { FeatureWorkspaceModule } from '@platon/feature/workspace';

import { WorkspaceComponent } from './workspace.component';
import { WorkspaceRoutingModule } from './workspace-routing.module';

@NgModule({
    imports: [
        SharedModule,
        FeatureWorkspaceModule,
        WorkspaceRoutingModule,
    ],
    declarations: [
        WorkspaceComponent,
    ],
})
export class WorkspaceModule { }
