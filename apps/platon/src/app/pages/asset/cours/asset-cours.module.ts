import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { RouterModule } from "@angular/router";
import { SharedUiListModule } from "@platon/shared/ui/list";
import { NzBreadCrumbModule } from "ng-zorro-antd/breadcrumb";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzDividerModule } from "ng-zorro-antd/divider";
import { NzGridModule } from "ng-zorro-antd/grid";
import { NzIconModule } from "ng-zorro-antd/icon";
import { NzProgressModule } from "ng-zorro-antd/progress";
import { NzSkeletonModule } from "ng-zorro-antd/skeleton";
import { NzTagModule } from "ng-zorro-antd/tag";
import { NzCommentModule } from 'ng-zorro-antd/comment';
import { AssetCoursComponent } from "./asset-cours.component";
import { AssetCoursOverviewComponent } from "./overview/asset-cours-overview.component";
import { AssetCoursSectionComponent } from "./sections/asset-cours-section.component";
import { NzAvatarModule } from "ng-zorro-antd/avatar";


@NgModule({
    declarations: [
        AssetCoursComponent,
        AssetCoursOverviewComponent,
        AssetCoursSectionComponent
    ],
    imports: [
        CommonModule,

        NzGridModule,
        NzIconModule,
        NzButtonModule,
        NzDividerModule,
        NzSkeletonModule,
        NzBreadCrumbModule,
        NzTagModule,
        NzProgressModule,
        NzCommentModule,
        NzAvatarModule,

        MatIconModule,
        SharedUiListModule,

        RouterModule.forChild([
            {
                path: ':name',
                component: AssetCoursComponent,
                children: [
                    {
                        path: '',
                        component: AssetCoursOverviewComponent
                    },
                    {
                        path: 'section/:id',
                        component: AssetCoursSectionComponent
                    },
                    { path: '**', redirectTo: '', pathMatch: 'full' }
                ]
            }
        ])
    ]
})
export class AssetCoursModule { }
