import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { NgeMarkdownModule} from '@mcisse/nge/markdown';
import { SafePipeModule } from '@platon/shared/utils';
import { AppSharedLayoutModule } from '../../shared/layout/layout.module';

import { ExerciseComponent } from './exercise.component';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        MatCardModule,
        NgeMarkdownModule,
        MatButtonToggleModule,

        SafePipeModule,
        AppSharedLayoutModule,

        RouterModule.forChild([{ path: '', component: ExerciseComponent }]),
    ],

    declarations: [ExerciseComponent],
    exports: [ExerciseComponent],
    providers: [],
})
export class ExerciseModule {}
