import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Libs
import { NzTabsModule } from 'ng-zorro-antd/tabs';

import { FeatureWorkspaceModule } from '@platon/feature/workspace';

// Module
import { SettingsComponent } from './settings.component';
import { SettingsRoutingModule } from './settings-routing.module';


@NgModule({
    imports: [
        CommonModule,
        NzTabsModule,
        FeatureWorkspaceModule,
        SettingsRoutingModule,
    ],
    declarations: [SettingsComponent]
})
export class SettingsModule { }
