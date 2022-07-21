import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { AppSharedLayoutModule } from "../../shared/layout";

import { LiveRoutingModule } from "./live-routing.module";
import { LiveComponent } from "./live.component";

@NgModule({
    declarations: [LiveComponent],
    imports: [
        CommonModule,

        NzGridModule,
        NzBreadCrumbModule,
        NzPageHeaderModule,
        NzDividerModule,
        NzSpaceModule,
        NzButtonModule,
        NzProgressModule,
        NzTagModule,
        NzIconModule,

        AppSharedLayoutModule,

        LiveRoutingModule
    ],

})
export class LiveModule { }
