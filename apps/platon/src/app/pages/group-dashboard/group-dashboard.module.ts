import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppSharedLayoutModule } from '../../shared/layout/layout.module';
import { GroupDashboardComponent } from './group-dashboard.component';

@NgModule({
    imports: [
        AppSharedLayoutModule,
        CommonModule,

        RouterModule.forChild([
            {
                path: '',
                component: GroupDashboardComponent
            }
        ])
    ],
    declarations: [GroupDashboardComponent]
})
export class GroupDashboardModule { }
