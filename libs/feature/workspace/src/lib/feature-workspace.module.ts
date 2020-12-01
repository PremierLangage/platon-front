import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

import { SharedUiListModule } from '@platon/shared/ui';

import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';

import { ActivityListItemComponent } from './components/activity-list-item/activity-list-item.component';
import { CircleListItemComponent } from './components/circle-list-item/circle-list-item.component';
import { ExerciseListItemComponent } from './components/exercise-list-item/exercise-list-item.component';
import { PackageListItemComponent } from './components/package-list-item/package-list-item.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,

        MatIconModule,
        MatCardModule,
        MatButtonModule,
        MatTooltipModule,

        NzTagModule,
        NzEmptyModule,
        NzBadgeModule,
        NzAvatarModule,

        SharedUiListModule,
    ],
    exports: [
        ActivityListItemComponent,
        CircleListItemComponent,
        ExerciseListItemComponent,
        PackageListItemComponent,
    ],
    declarations: [
        ActivityListItemComponent,
        CircleListItemComponent,
        ExerciseListItemComponent,
        PackageListItemComponent,
    ],
})
export class FeatureWorkspaceModule {}
