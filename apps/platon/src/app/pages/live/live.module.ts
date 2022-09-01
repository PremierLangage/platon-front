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

import { LiveComponent } from "./live.component";
import { RouterModule } from "@angular/router";
import { LiveBuildResolver } from "./resolver/build.resolver";
import { LiveRetrieveResolver } from "./resolver/retrieve.resolver";

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

        RouterModule.forChild([
            {
                path: ':id',
                component: LiveComponent,
                resolve: { live: LiveBuildResolver }
            },
            {
                path: ':id/:session',
                component: LiveComponent,
                resolve: { live: LiveRetrieveResolver }
            }
        ])
    ],
    providers: [
        LiveBuildResolver,
        LiveRetrieveResolver
    ]
})
export class LiveModule { }
