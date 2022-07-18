import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

import { SharedUiListModule } from '@platon/shared/ui/list';

import { NzTreeModule } from 'ng-zorro-antd/tree';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzTreeViewModule } from 'ng-zorro-antd/tree-view';
import { NzTimelineModule } from 'ng-zorro-antd/timeline';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';

import { StatusColorPipe } from './pipes/status-color.pipe';
import { StatusLabelPipe } from './pipes/status-label.pipe';
import { ResourceNamePipe } from './pipes/resource-name.pipe';
import { ResourceIconPipe } from './pipes/resource-icon.pipe';
import { ResourceColorPipe } from './pipes/resource-color.pipe';

import { ListComponent } from './components/list/list.component';
import { CircleItemComponent } from './components/circle-item/circle-item.component';
import { ResourceItemComponent } from './components/resource-item/resource-item.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { EventListComponent } from './components/event-list/event-list.component';
import { CircleTreeComponent } from './components/circle-tree/circle-tree.component';
import { FilesTreeComponent } from './components/files-tree/files-tree.component';
import { CoursListComponent } from './components/cours-list/cours-list.component';
import { CodeTreeComponent } from './components/code-tree/code-tree.component';


@NgModule({
    imports: [
        CommonModule,
        RouterModule,

        MatIconModule,
        MatTooltipModule,

        NzIconModule,
        NzSpinModule,
        NzEmptyModule,
        NzBadgeModule,
        NzButtonModule,
        NzAvatarModule,
        NzMessageModule,
        NzTreeModule,
        NzDropDownModule,
        NzTreeViewModule,
        NzTimelineModule,
        NzGridModule,
        NzCardModule,
        NzTagModule,
        NzListModule,
        NzSkeletonModule,

        SharedUiListModule,
    ],
    exports: [
        StatusColorPipe,
        StatusLabelPipe,
        ResourceIconPipe,
        ResourceNamePipe,
        ResourceColorPipe,

        ListComponent,
        EventListComponent,
        CircleTreeComponent,
        CircleItemComponent,
        ResourceItemComponent,
        FilesTreeComponent,
        CoursListComponent,
        CodeTreeComponent,
    ],
    declarations: [
        StatusColorPipe,
        StatusLabelPipe,
        ResourceIconPipe,
        ResourceNamePipe,
        ResourceColorPipe,

        ListComponent,
        ListItemComponent,
        EventListComponent,
        CircleTreeComponent,
        CircleItemComponent,
        ResourceItemComponent,
        FilesTreeComponent,
        CoursListComponent,
        CodeTreeComponent,
    ],
})
export class FeatureWorkspaceModule { }
