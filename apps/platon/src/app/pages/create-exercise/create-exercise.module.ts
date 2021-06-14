import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';

import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzNotificationModule } from 'ng-zorro-antd/notification';

import { CoreAuthModule } from '@platon/core/auth';
import { SharedUiStepperModule } from '@platon/shared/ui/stepper';
import { FeatureWorkspaceModule } from '@platon/feature/workspace';

import { CreateExerciseComponent } from './create-exercise.component';
import { CreateExerciseRoutingModule } from './create-exercise-routing.module';


@NgModule({
  imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,


        MatInputModule,
        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,

        NzSpinModule,
        NzIconModule,
        NzStepsModule,
        NzSelectModule,
        NzSkeletonModule,
        NzNotificationModule,

        CoreAuthModule,
        SharedUiStepperModule,
        FeatureWorkspaceModule,

        CreateExerciseRoutingModule
  ],
  declarations: [CreateExerciseComponent]
})
export class CreateExerciseModule { }
