<<<<<<< HEAD
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { FeatureWorkspaceModule } from '@platon/feature/workspace';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { AppSharedLayoutModule } from '../../shared/layout';
import { AssetRoutingModule } from './asset-routing.module';
import { AssetComponent } from './asset.component';

@NgModule({
    imports: [
        CommonModule,

        MatButtonModule,

        NzBreadCrumbModule,

        AppSharedLayoutModule,
        FeatureWorkspaceModule,
        AssetRoutingModule,
    ],
    declarations: [AssetComponent],
})
export class AssetModule {}
=======
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NzBreadCrumbModule } from "ng-zorro-antd/breadcrumb";
import { AppSharedLayoutModule } from "../../shared/layout";
import { ActivityComponent } from "./activity/activity.component";
import { AssetResolver } from "./asset.resolver";
import { AssetComponent } from "./asset.component";
import { CoursComponent } from "./cours/cours.component";
import { ExersiceComponent } from "./exersice/exersice.component";
import { SectionComponent } from "./section/section.component";
import { NzGridModule } from "ng-zorro-antd/grid";
import { NzDividerModule } from "ng-zorro-antd/divider";
import { NzTagModule } from "ng-zorro-antd/tag";
import { NzProgressModule } from "ng-zorro-antd/progress";
import { SharedUiListModule } from "@platon/shared/ui/list";
import { MatIconModule } from "@angular/material/icon";
import { NzAvatarModule } from "ng-zorro-antd/avatar";
import { NzCommentModule } from 'ng-zorro-antd/comment';


@NgModule({
    declarations: [
        AssetComponent,
        CoursComponent,
        ActivityComponent,
        ExersiceComponent,
        SectionComponent,
    ],
    imports: [
        CommonModule,

        NzBreadCrumbModule,
        NzGridModule,
        NzDividerModule,
        NzTagModule,
        NzProgressModule,
        NzAvatarModule,
        NzCommentModule,


        AppSharedLayoutModule,
        SharedUiListModule,
        MatIconModule,

        RouterModule.forChild([
            {
                path: '',
                component: AssetComponent,
                children: [
                    {
                        path: 'cours/:name',
                        component: CoursComponent,
                        resolve: { asset: AssetResolver },
                        data: { type: 'cours' },
                        children: [
                            {
                                path: 'activity/:name',
                                component: ActivityComponent,
                                resolve: { asset: AssetResolver },
                                data: { type: 'activity' },
                                children: [
                                    {
                                        path: 'exersice/:name',
                                        component: ExersiceComponent,
                                        resolve: { asset: AssetResolver },
                                        data: { type: 'exersice' }
                                    }
                                ]
                            },
                            {
                                path: 'section/:id',
                                component: SectionComponent
                            }
                        ]
                    },
                ]
            },
        ])
    ],
    providers: [ AssetResolver ]
})
export class AssetModule { }
>>>>>>> develop-asset-update
