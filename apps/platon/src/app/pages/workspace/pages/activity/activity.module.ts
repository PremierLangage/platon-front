import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { WorkspaceSharedModule } from '../../shared/workspace-shared.module';

import { ActivityComponent } from './activity.component';

@NgModule({
    imports: [
        WorkspaceSharedModule,
        RouterModule.forChild([
            { path: ':id', component: ActivityComponent }
        ]),
    ],
    declarations: [ActivityComponent],
})
export class ActivityModule {}
