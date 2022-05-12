import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { OverviewComponent } from './overview.component';

@NgModule({
    declarations: [OverviewComponent],
    imports: [
        NzGridModule,
        RouterModule.forChild([
            {
                path: '',
                component: OverviewComponent,
            },
        ]),
    ],
})
export class OverviewModule {}
