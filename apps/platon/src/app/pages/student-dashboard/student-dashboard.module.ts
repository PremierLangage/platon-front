import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppSharedLayoutModule } from '../../shared/layout/layout.module';
import { StudentDashboardComponent } from './student-dashboard.component';

@NgModule({
    imports: [
        AppSharedLayoutModule,
        CommonModule,

        RouterModule.forChild([
            {
                path: '',
                component: StudentDashboardComponent
            }
        ])
    ],
    declarations: [StudentDashboardComponent]
})
export class StudentDashboardModule { }
