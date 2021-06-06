import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';

import { SharedUiListModule } from '@platon/shared/ui/list';

import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzButtonModule } from 'ng-zorro-antd/button';
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
import { CircleFiltersComponent } from './components/circle-filters/circle-filters.component';
import { ResourceFiltersComponent } from './components/resource-filters/resource-filters.component';


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,

        MatIconModule,
        MatCardModule,
        MatTabsModule,
        MatButtonModule,
        MatTooltipModule,

        MatRadioModule,
        MatInputModule,
        MatCheckboxModule,
        MatFormFieldModule,

        NzTagModule,
        NzIconModule,
        NzEmptyModule,
        NzBadgeModule,
        NzAvatarModule,
        NzTreeViewModule,
        NzButtonModule,
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
        CircleFiltersComponent,
        ResourceFiltersComponent,
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

        CircleFiltersComponent,
        ResourceFiltersComponent,
    ],
})
export class FeatureWorkspaceModule { }
