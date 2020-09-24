import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ObserversModule } from '@angular/cdk/observers';
import { BaseComponent } from './base/base.component';
import { SharedUtilsPipesModule } from '@platon/shared/utils';
import { NgeMonacoModule } from 'nge-monaco';
@NgModule({
    imports: [
        CommonModule,
        ObserversModule,
        NgeMonacoModule,
        SharedUtilsPipesModule,
    ],
    exports: [
        CommonModule,
        SharedUtilsPipesModule,
        BaseComponent,
    ],
    declarations: [
        BaseComponent,
    ],
})
export class SharedModule { }
