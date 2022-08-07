import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedUiCardModule } from "@platon/shared/ui/card";

import { NzButtonModule } from "ng-zorro-antd/button";
import { NzDividerModule } from "ng-zorro-antd/divider";
import { NzGridModule } from "ng-zorro-antd/grid";
import { NzIconModule } from "ng-zorro-antd/icon";
import { NzInputModule } from "ng-zorro-antd/input";
import { NzLayoutModule } from "ng-zorro-antd/layout";
import { NzMenuModule } from "ng-zorro-antd/menu";
import { NzSpaceModule } from "ng-zorro-antd/space";
import { NzSpinModule } from 'ng-zorro-antd/spin';

import { AdminCoursComponent } from "./admin-cours.component";

@NgModule({
    declarations: [AdminCoursComponent],
    imports: [
        CommonModule,

        NzGridModule,
        NzButtonModule,
        NzInputModule,
        NzIconModule,
        NzDividerModule,
        NzLayoutModule,
        NzMenuModule,
        NzSpaceModule,
        NzSpinModule,

        SharedUiCardModule,

        RouterModule.forChild([
            {
                path: '',
                component: AdminCoursComponent
            }
        ])
    ]
})
export class AdminCoursModule { }
