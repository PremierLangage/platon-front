import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

import { SharedUiListModule } from '@platon/shared/ui/list';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzTreeViewModule } from 'ng-zorro-antd/tree-view';
import { NzTimelineModule } from 'ng-zorro-antd/timeline';

import { StatusColorPipe } from './pipes/status-color.pipe';
import { StatusLabelPipe } from './pipes/status-label.pipe';

import { ModelItemComponent } from './components/model-item/model-item.component';
import { CircleItemComponent } from './components/circle-item/circle-item.component';
import { ActivityItemComponent } from './components/activity-item/activity-item.component';
import { ExerciseItemComponent } from './components/exercise-item/exercise-item.component';


import { ListComponent } from './components/list/list.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { EventListComponent } from './components/event-list/event-list.component';
import { CircleTreeComponent } from './components/circle-tree/circle-tree.component';


@NgModule({
    imports: [
        CommonModule,
        RouterModule,

        MatIconModule,
        MatTooltipModule,

        NzIconModule,
        NzEmptyModule,
        NzBadgeModule,
        NzAvatarModule,
        NzTreeViewModule,
        NzTimelineModule,

        SharedUiListModule,
    ],
    exports: [
        StatusColorPipe,
        StatusLabelPipe,

        ListComponent,
        ListItemComponent,
        EventListComponent,
        CircleTreeComponent,
    ],
    declarations: [
        StatusColorPipe,
        StatusLabelPipe,

        ListComponent,
        ListItemComponent,
        EventListComponent,
        CircleTreeComponent,

        ModelItemComponent,
        CircleItemComponent,
        ActivityItemComponent,
        ExerciseItemComponent,
    ],
})
export class FeatureWorkspaceModule { }
