
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { CircleComponent } from './circle.component';
import { CircleRoutingModule } from './circle-routing.module';


@NgModule({
    declarations: [CircleComponent],
    imports: [
        CommonModule,
        MatButtonModule,
        CircleRoutingModule,
    ],
    providers: [],
})
export class CircleModule {}
