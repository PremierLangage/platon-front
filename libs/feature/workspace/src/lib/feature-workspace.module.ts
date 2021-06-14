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
import { ResourceIconPipe } from './pipes/resource-icon.pipe';
import { ResourceColorPipe } from './pipes/resource-color.pipe';

import { ListComponent } from './components/list/list.component';
import { CircleItemComponent } from './components/circle-item/circle-item.component';
import { ResourceItemComponent } from './components/resource-item/resource-item.component';
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
        ResourceIconPipe,
        ResourceColorPipe,

        ListComponent,
        EventListComponent,
        CircleTreeComponent,
        ResourceItemComponent,
    ],
    declarations: [
        StatusColorPipe,
        StatusLabelPipe,
        ResourceIconPipe,
        ResourceColorPipe,

        ListComponent,
        ListItemComponent,
        EventListComponent,
        CircleTreeComponent,
        CircleItemComponent,
        ResourceItemComponent,
    ],
})
export class FeatureWorkspaceModule { }
