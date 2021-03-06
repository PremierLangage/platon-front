import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { NzEmptyModule } from 'ng-zorro-antd/empty';

import { CoreAuthModule } from '@platon/core/auth';
import { SharedUiSearchModule } from '@platon/shared/ui/search';

import { NavComponent } from './widgets/nav/nav.component';
import { LogoComponent } from './widgets/logo/logo.component';
import { HeaderComponent } from './widgets/header/header.component';
import { DrawerComponent } from './widgets/drawer/drawer.component';
import { BannerComponent } from './widgets/banner/banner.component';
import { ContentComponent } from './widgets/content/content.component';
import { ContainerComponent } from './widgets/container/container.component';



const DECLARATIONS = [
    NavComponent,
    LogoComponent,
    HeaderComponent,
    DrawerComponent,
    BannerComponent,
    ContentComponent,
    ContainerComponent,
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule,

        MatIconModule,
        MatMenuModule,
        MatBadgeModule,
        MatButtonModule,
        MatSidenavModule,
        MatToolbarModule,

        NzEmptyModule,

        CoreAuthModule,
        SharedUiSearchModule,
    ],
    exports: [
        ...DECLARATIONS,
    ],
    declarations: [
        ...DECLARATIONS,
    ]
})
export class SharedModule { }
