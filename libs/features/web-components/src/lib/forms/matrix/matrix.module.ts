import { NgModule, Type } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { MatrixComponent } from './matrix.component';

@NgModule({
    declarations: [MatrixComponent],
    imports: [
        SharedModule
    ],
    exports: [MatrixComponent],
})
export class MatrixModule {
    customElementComponent: Type<any> = MatrixComponent;
}
