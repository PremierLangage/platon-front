import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfobarComponent } from './infobar.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    exports: [
        InfobarComponent,
    ],
    declarations: [
        InfobarComponent,
    ]
})
export class InfobarModule {}
