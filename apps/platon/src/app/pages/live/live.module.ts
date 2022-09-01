<<<<<<< HEAD
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FeatureWorkspaceModule } from '@platon/feature/workspace';
import { ComponentPipeModule, SafePipeModule } from '@platon/shared/utils';
import { AppSharedLayoutModule } from '../../shared/layout';
import { LiveRoutingModule } from './live-routing.module';
import { LiveComponent } from './live.component';

import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { RadioGroupModule } from 'libs/feature/web-component/src/lib/forms/radio-group/radio-group.module';
import { PlatonViewerModule } from 'libs/feature/web-component/src/lib/widgets/platon-viewer/platon-viewer.module';
=======
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
>>>>>>> develop-asset-update

@NgModule({
    declarations: [LiveComponent],
    imports: [
        CommonModule,
<<<<<<< HEAD
        SafePipeModule,
        ComponentPipeModule,

        PlatonViewerModule,

        NzSpinModule,
        NzButtonModule,

        AppSharedLayoutModule,
        FeatureWorkspaceModule,

        LiveRoutingModule,
    ],
})
export class LiveModule {}
=======

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
>>>>>>> develop-asset-update
