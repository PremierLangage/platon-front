import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatChipsModule } from '@angular/material/chips';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatStepperModule } from '@angular/material/stepper';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';

import { SharedUiListModule } from '@platon/shared/ui';
import { SharedUiDialogModule } from '@platon/shared/ui';
import { SharedUiSearchBarModule } from '@platon/shared/ui';

import { NavComponent } from './widgets/nav/nav.component';
import { LogoComponent } from './widgets/logo/logo.component';
import { HeaderComponent } from './widgets/header/header.component';
import { DrawerComponent } from './widgets/drawer/drawer.component';
import { BannerComponent } from './widgets/banner/banner.component';
import { ContentComponent } from './widgets/content/content.component';
import { ContainerComponent } from './widgets/container/container.component';

const ANGULAR_MODULES = [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
];

const MATERIAL_MODULES = [
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatBadgeModule,
    MatTabsModule,
    MatChipsModule,
    MatInputModule,
    MatButtonModule,
    MatTooltipModule,
    MatSidenavModule,
    MatStepperModule,
    MatToolbarModule,
    MatTableModule,
    MatRadioModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatFormFieldModule,
];


const LIBS_MODULES = [
    SharedUiListModule,
    SharedUiDialogModule,
    SharedUiSearchBarModule,
];

const MODULES = [
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
        RouterModule,
        ...ANGULAR_MODULES,
        ...MATERIAL_MODULES,
        ...LIBS_MODULES,
    ],
    exports: [
        ...ANGULAR_MODULES,
        ...MATERIAL_MODULES,
        ...LIBS_MODULES,
        ...MODULES,
    ],
    declarations: [
        ...MODULES,
    ]
})
export class SharedModule { }
