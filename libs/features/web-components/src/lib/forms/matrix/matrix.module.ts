import { NgModule, Type } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { OverlayModule } from '@angular/cdk/overlay';

import { SharedModule } from '../../shared/shared.module';

import { MatrixComponent } from './matrix.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatrixResizerComponent } from './matrix-resizer/matrix-resizer.component';

@NgModule({
    declarations: [MatrixComponent, MatrixResizerComponent],
    imports: [
        SharedModule,
        FormsModule,
        OverlayModule,
        MatIconModule,
        MatTooltipModule,
        MatButtonModule,
    ],
    exports: [MatrixComponent],
})
export class MatrixModule {
    customElementComponent: Type<any> = MatrixComponent;
}
