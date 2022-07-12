import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';

import { AppSharedLayoutModule } from "../../shared/layout";
import { AssetRoutingModule } from "./asset-routing.module";
import { AssetComponent } from "./asset.component";


@NgModule({
    imports: [
        CommonModule,

        NzBreadCrumbModule,

        AppSharedLayoutModule,

        AssetRoutingModule,
    ],
    declarations: [AssetComponent]
})
export class AssetModule { }
