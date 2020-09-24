import { NgModule, Type } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { TimerComponent } from './timer.component';

@NgModule({
    declarations: [TimerComponent],
    imports: [
        SharedModule
    ],
    exports: [TimerComponent],
})
export class TimerModule {
    customElementComponent: Type<any> = TimerComponent;
}
