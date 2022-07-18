import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FeatureWorkspaceModule } from "@platon/feature/workspace";
import { CodeComponent } from "./code.component";

import { MatIconModule } from '@angular/material/icon';

import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzListModule } from 'ng-zorro-antd/list';


@NgModule({
    imports: [
        CommonModule,

        MatIconModule,

        NzIconModule,
        NzSpaceModule,
        NzPopoverModule,
        NzBreadCrumbModule,
        NzButtonModule,
        NzListModule,

        FeatureWorkspaceModule,

        RouterModule.forChild([
            {
                path: '**',
                component: CodeComponent
            }
        ])
    ],
    declarations: [CodeComponent]
})
export class CodeModule { }
