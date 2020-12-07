import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzEmptyModule } from 'ng-zorro-antd/empty';

import { SharedModule } from '../../../../shared/shared.module';
import { FeatureWorkspaceModule } from '@platon/feature/workspace';

import { SearchComponent } from './search.component';

@NgModule({
    imports: [
        NzSpinModule,
        NzEmptyModule,

        SharedModule,
        FeatureWorkspaceModule,

        RouterModule.forChild([
            { path: '', component: SearchComponent }
        ]),
    ],
    declarations: [SearchComponent],
})
export class SearchModule {}
