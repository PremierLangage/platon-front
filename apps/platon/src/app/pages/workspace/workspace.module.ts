import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';

import { WorkspaceComponent } from './workspace.component';
import { WorkspaceRoutingModule } from './workspace-routing.module';

@NgModule({
    imports: [
        SharedModule,
        WorkspaceRoutingModule,
    ],
    declarations: [
        WorkspaceComponent,
    ],
})
export class WorkspaceModule { }
