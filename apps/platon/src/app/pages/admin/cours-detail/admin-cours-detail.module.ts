import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { RouterModule } from "@angular/router";
import { NzDividerModule } from "ng-zorro-antd/divider";
import { NzGridModule } from "ng-zorro-antd/grid";
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzInputModule } from "ng-zorro-antd/input";
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from "ng-zorro-antd/menu";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzIconModule } from "ng-zorro-antd/icon";
import { NzUploadModule } from 'ng-zorro-antd/upload';

import { AdminCoursDetailComponent } from "./admin-cours-detail.component";
import { AdminCoursDetailSettingsComponent } from "./settings/admin-cours-detail-settings.component";
import { AdminCoursDetailSectionComponent } from "./sections/admin-cours-detail-section.component";
import { NzMessageModule } from "ng-zorro-antd/message";




@NgModule({
    declarations: [
        AdminCoursDetailComponent,
        AdminCoursDetailSettingsComponent,
        AdminCoursDetailSectionComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,

        NzLayoutModule,
        NzMenuModule,
        NzDividerModule,
        NzGridModule,
        NzSkeletonModule,
        NzButtonModule,
        NzIconModule,
        NzSpaceModule,
        NzInputModule,
        NzUploadModule,
        NzMessageModule,


        RouterModule.forChild([
            {
                path: ':path',
                component: AdminCoursDetailComponent,
                children: [
                    {
                        path: 'settings',
                        component: AdminCoursDetailSettingsComponent
                    },
                    {
                        path: 'section/:id',
                        component: AdminCoursDetailSectionComponent
                    },
                    { path: '**', redirectTo: 'settings', pathMatch: 'full' }
                ]
            }
        ])
    ]
})
export class AdminCoursDetailModule { }
