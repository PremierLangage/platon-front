import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LayoutModule as CdkLayoutModule } from '@angular/cdk/layout';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { NzEmptyModule } from 'ng-zorro-antd/empty';

import { CoreAuthModule } from '@platon/core/auth';

import { NavComponent } from './nav/nav.component';
import { LogoComponent } from './logo/logo.component';
import { HeaderComponent } from './header/header.component';
import { DrawerComponent } from './drawer/drawer.component';
import { ContentComponent } from './content/content.component';
import { ContainerComponent } from './container/container.component';


const DECLARATIONS = [
    NavComponent,
    LogoComponent,
    HeaderComponent,
    DrawerComponent,
    ContentComponent,
    ContainerComponent,
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule,

        CdkLayoutModule,
        MatIconModule,
        MatMenuModule,
        MatBadgeModule,
        MatButtonModule,
        MatSidenavModule,
        MatToolbarModule,

        NzEmptyModule,

        CoreAuthModule,
    ],
    exports: [
        ...DECLARATIONS,
    ],
    declarations: [
        ...DECLARATIONS,
    ]
})
export class AppSharedLayoutModule { }
