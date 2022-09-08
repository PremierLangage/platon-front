import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FeatureWorkspaceModule } from "@platon/feature/workspace";

import { NzSkeletonModule } from "ng-zorro-antd/skeleton";
import { NzBreadCrumbModule } from "ng-zorro-antd/breadcrumb";
import { NzIconModule } from "ng-zorro-antd/icon";

import { CodeRoutingModule } from "./code-routing.module";
import { CodeComponent } from "./code.component";

@NgModule({
    declarations: [CodeComponent],
    imports: [
        CommonModule,

        NzBreadCrumbModule,
        NzSkeletonModule,
        NzIconModule,

        FeatureWorkspaceModule,

        CodeRoutingModule,
    ],
})
export class CodeModule { }
