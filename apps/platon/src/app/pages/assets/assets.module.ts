import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppSharedLayoutModule } from '../../shared/layout/layout.module';
import { SafePipeModule } from '@platon/shared/utils';

import { AssetComponent } from './assets.component';

@NgModule ({
    imports: [
        CommonModule,
        SafePipeModule,

        AppSharedLayoutModule,
    ],

    declarations: [AssetComponent],
    exports: [AssetComponent],
    providers: [],
})
export class AssetModule { }
