import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ObserversModule } from '@angular/cdk/observers';
import { BaseComponent } from './base/base.component';
import { SharedUtilsPipesModule } from '@platon/shared/utils';

@NgModule({
    imports: [
        CommonModule,
        ObserversModule,
        SharedUtilsPipesModule,
    ],
    exports: [
        CommonModule,
        ObserversModule,
        SharedUtilsPipesModule,
        BaseComponent,
    ],
    declarations: [
        BaseComponent,
    ],
})
export class SharedModule { }
