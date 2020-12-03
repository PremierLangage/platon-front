import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { WorkspaceSharedModule } from '../../shared/workspace-shared.module';

import { SearchComponent } from './search.component';

@NgModule({
    imports: [
        WorkspaceSharedModule,
        RouterModule.forChild([
            { path: '', component: SearchComponent }
        ]),
    ],
    declarations: [SearchComponent],
})
export class SearchModule {}
