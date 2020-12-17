import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatusbarComponent } from './statusbar.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    exports: [
        StatusbarComponent,
    ],
    declarations: [
        StatusbarComponent,
    ]
})
export class StatusbarModule {}
