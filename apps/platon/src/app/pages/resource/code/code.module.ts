import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FeatureWorkspaceModule } from '@platon/feature/workspace';
import { CodeComponent } from './code.component';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { SafePipeModule } from '@platon/shared/utils';

@NgModule({
    imports: [
        CommonModule,
        SafePipeModule,

        NzPopoverModule,
        NzButtonModule,
        NzIconModule,
        NzListModule,
        NzBreadCrumbModule,
        NzSpaceModule,
        NzSpinModule,

        FeatureWorkspaceModule,
        RouterModule.forChild([
            {
                path: '',
                component: CodeComponent,
            },
        ]),
    ],
    declarations: [CodeComponent],
})
export class CodeModule {}