import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzTimelineModule } from 'ng-zorro-antd/timeline';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';

import { SharedModule } from '../../../../shared/shared.module';
import { FeatureWorkspaceModule } from '@platon/feature/workspace';

import { ExerciseComponent } from './exercise.component';
import { CreateExerciseFormComponent } from './create-exercise-form/create-exercise-form.component';

@NgModule({
    imports: [
        NzTagModule,
        NzSpinModule,
        NzTabsModule,
        NzEmptyModule,
        NzTimelineModule,
        NzBreadCrumbModule,

        SharedModule,
        FeatureWorkspaceModule,

        RouterModule.forChild([
            { path: ':id', component: ExerciseComponent }
        ]),
    ],
    declarations: [ExerciseComponent, CreateExerciseFormComponent],
})
export class ExerciseModule {}
