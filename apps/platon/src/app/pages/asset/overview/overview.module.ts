import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OverviewComponent } from './overview.component';

import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NgeMarkdownModule } from '@cisstech/nge/markdown';

@NgModule({
    declarations: [OverviewComponent],
    imports: [
        NgeMarkdownModule,

        NzGridModule,
        NzDividerModule,
        NzLayoutModule,
        NzMenuModule,
        NzIconModule,

        RouterModule.forChild([
            {
                path: '',
                component: OverviewComponent,
            },
        ]),
    ],
})
export class OverviewModule {}
