import { NgModule } from '@angular/core';

import { WorkspaceSharedModule } from '../../shared/workspace-shared.module';

import { CircleRoutingModule } from './circle-routing.module';

import { CircleComponent } from './circle.component';
import { CircleForumComponent } from './circle-forum/circle-forum.component';
import { CircleSettingsComponent } from './circle-settings/circle-settings.component';
import { CircleHomeComponent } from './circle-home/circle-home.component';
import { CircleDocComponent } from './circle-doc/circle-doc.component';

@NgModule({
    imports: [
        WorkspaceSharedModule,
        CircleRoutingModule,
    ],
    declarations: [
        CircleComponent,
        CircleDocComponent,
        CircleHomeComponent,
        CircleForumComponent,
        CircleSettingsComponent,
    ],
})
export class CircleModule {}
