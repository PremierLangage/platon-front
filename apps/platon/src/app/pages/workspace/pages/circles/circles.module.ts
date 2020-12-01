import { NgModule } from '@angular/core';

import { WorkspaceSharedModule } from '../../shared/workspace-shared.module';

import { CirclesRoutingModule } from './circles-routing.module';

import { CirclesComponent } from './circles.component';
import { CircleDetailComponent } from './circle-detail/circle-detail.component';
import { CircleDetailDocComponent } from './circle-detail-doc/circle-detail-doc.component';
import { CircleDetailHomeComponent } from './circle-detail-home/circle-detail-home.component';
import { CircleDetailForumComponent } from './circle-detail-forum/circle-detail-forum.component';
import { CircleDetailSettingsComponent } from './circle-detail-settings/circle-detail-settings.component';

@NgModule({
    imports: [
        WorkspaceSharedModule,
        CirclesRoutingModule,
    ],
    declarations: [
        CirclesComponent,
        CircleDetailComponent,
        CircleDetailDocComponent,
        CircleDetailHomeComponent,
        CircleDetailForumComponent,
        CircleDetailSettingsComponent,
    ],
})
export class CirclesModule {}
