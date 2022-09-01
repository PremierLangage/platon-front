import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AppSharedLayoutModule } from '../../shared/layout';

@NgModule({
    declarations: [AdminComponent],
    imports: [
        CommonModule,

        NzLayoutModule,
        NzMenuModule,
        NzIconModule,

        AppSharedLayoutModule,

        AdminRoutingModule,
    ],
    providers: [],
})
export class AdminModule {}
