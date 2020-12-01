import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { WorkspaceSharedModule } from '../../shared/workspace-shared.module';

import { ActivitiesComponent } from './activities.component';

@NgModule({
    imports: [
        WorkspaceSharedModule,
        RouterModule.forChild([
            { path: '', component: ActivitiesComponent }
        ]),
    ],
    declarations: [ActivitiesComponent],
})
export class ActivitiesModule {}
