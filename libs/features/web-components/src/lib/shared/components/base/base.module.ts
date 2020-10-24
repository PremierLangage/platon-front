import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ObserversModule } from '@angular/cdk/observers';
import { NgeMonacoModule } from 'nge-monaco';
import { BaseComponent } from './base.component';

@NgModule({
    imports: [
        CommonModule,
        ObserversModule,
        NgeMonacoModule,
    ],
    exports: [
        CommonModule,
        BaseComponent,
    ],
    declarations: [
        BaseComponent,
    ],
})
export class BaseModule { }
