import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ObserversModule } from '@angular/cdk/observers';
import { BaseComponent } from './base/base.component';
import { SharedUtilsPipesModule } from '@platon/shared/utils';
import { NgeMonacoModule } from 'nge-monaco';
import { CssPipe } from './pipes/css.pipe';
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
        CssPipe,
    ],
    declarations: [
        BaseComponent,
        CssPipe,
    ],
})
export class SharedModule { }
