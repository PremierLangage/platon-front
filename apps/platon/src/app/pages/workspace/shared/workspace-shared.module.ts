import { NgModule } from '@angular/core';

import { SharedModule } from '../../../shared/shared.module';
import { FeatureWorkspaceModule } from '@platon/feature/workspace';

import { SearchViewComponent } from './widgets/search-view/search-view.component';

@NgModule({
    imports: [
        SharedModule,
        FeatureWorkspaceModule,
    ],
    exports: [
        SharedModule,
        FeatureWorkspaceModule,
        SearchViewComponent,
    ],
    declarations: [
        SearchViewComponent,
    ],
})
export class WorkspaceSharedModule {}
