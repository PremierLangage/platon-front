import { NgModule, Type } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { RadioGroupComponent } from './radio-group.component';

@NgModule({
    declarations: [RadioGroupComponent],
    imports: [
        SharedModule
    ],
    exports: [RadioGroupComponent],
})
export class RadioGroupModule {
    customElementComponent: Type<any> = RadioGroupComponent;
}
