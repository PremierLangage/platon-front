import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { WorkspaceSharedModule } from '../../shared/workspace-shared.module';

import { PackagesComponent } from './packages.component';

@NgModule({
    imports: [
        WorkspaceSharedModule,
        RouterModule.forChild([
            { path: '', component: PackagesComponent }
        ]),
    ],
    declarations: [PackagesComponent],
})
export class PackagesModule {}
