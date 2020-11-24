import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';

import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';

import { ExerciseCardComponent } from './components/exercise-card/exercise-card.component';

@NgModule({
    imports: [
        CommonModule,

        MatIconModule,
        MatCardModule,
        MatTabsModule,
        MatInputModule,
        MatChipsModule,
        MatButtonModule,
        MatSidenavModule,
        MatToolbarModule,
        MatStepperModule,
        MatFormFieldModule,

        NzTagModule,
        NzEmptyModule,
        NzBadgeModule,
        NzAvatarModule,
    ],
    declarations: [ExerciseCardComponent],
    exports: [ExerciseCardComponent],
})
export class FeatureWorkspaceExerciseModule {}
