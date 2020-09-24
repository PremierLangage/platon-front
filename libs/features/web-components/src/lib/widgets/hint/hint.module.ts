import { NgModule, Type } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { HintComponent } from './hint.component';

@NgModule({
    declarations: [HintComponent],
    imports: [
        SharedModule
    ],
    exports: [HintComponent],
})
export class HintModule {
    customElementComponent: Type<any> = HintComponent;
}
