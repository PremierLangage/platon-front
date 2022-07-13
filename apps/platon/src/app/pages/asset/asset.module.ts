import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AssetPipeModule, SafePipeModule } from "@platon/shared/utils";


import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzDividerModule } from "ng-zorro-antd/divider";
import { NzGridModule } from "ng-zorro-antd/grid";

import { AppSharedLayoutModule } from "../../shared/layout";

import { AssetRoutingModule } from "./asset-routing.module";
import { AssetComponent } from "./asset.component";


@NgModule({
    imports: [
        CommonModule,
        SafePipeModule,
        AssetPipeModule,

        NzGridModule,
        NzDividerModule,
        NzBreadCrumbModule,

        AppSharedLayoutModule,

        AssetRoutingModule,
    ],
    declarations: [AssetComponent]
})
export class AssetModule { }
