import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

import { SafePipeModule } from '@platon/shared/utils';
import { NgeMonacoModule } from 'nge-monaco';
import { NgeMarkdownModule } from 'nge-markdown';
import { SharedUiListModule } from '@platon/shared/ui/list';

import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzTimelineModule } from 'ng-zorro-antd/timeline';

import { CircleItemComponent } from './components/circle-item/circle-item.component';
import { ActivityItemComponent } from './components/activity-item/activity-item.component';
import { ExerciseItemComponent } from './components/exercise-item/exercise-item.component';

import { ResourceDocComponent } from './components/resource-doc/resource-doc.component';
import { ResourceItemComponent } from './components/resource-item/resource-item.component';
import { ResourceEventsComponent } from './components/resource-events/resource-events.component';
import { ResourceDetailComponent } from './components/resource-detail/resource-detail.component';

import { ResourceIconPipe } from './pipes/resource-icon.pipe';
import { ResourceStatusPipe } from './pipes/resource-status.pipe';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,

        MatIconModule,
        MatCardModule,
        MatTabsModule,
        MatButtonModule,
        MatTooltipModule,

        NzTagModule,
        NzEmptyModule,
        NzBadgeModule,
        NzAvatarModule,
        NzTimelineModule,

        SafePipeModule,
        NgeMonacoModule,
        NgeMarkdownModule,
        SharedUiListModule,
    ],
    exports: [
        ResourceDocComponent,
        ResourceEventsComponent,
        ResourceItemComponent,

        ResourceIconPipe,
        ResourceStatusPipe,
    ],
    declarations: [
        ResourceDocComponent,
        ActivityItemComponent,
        CircleItemComponent,
        ExerciseItemComponent,
        ResourceItemComponent,
        ResourceEventsComponent,
        ResourceDetailComponent,

        ResourceIconPipe,
        ResourceStatusPipe,
    ],
})
export class FeatureWorkspaceModule {}
