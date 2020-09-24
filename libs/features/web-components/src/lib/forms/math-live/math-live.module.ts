import { NgModule, Type } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { MathLiveComponent } from './math-live.component';

@NgModule({
    declarations: [MathLiveComponent],
    imports: [
        SharedModule
    ],
    exports: [MathLiveComponent],
})
export class MathLiveModule {
    customElementComponent: Type<any> = MathLiveComponent;
}
