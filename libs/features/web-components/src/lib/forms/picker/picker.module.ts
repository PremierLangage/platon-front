import { NgModule, Type } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { PickerComponent } from './picker.component';

@NgModule({
    declarations: [PickerComponent],
    imports: [
        SharedModule
    ],
    exports: [PickerComponent],
})
export class PickerModule {
    customElementComponent: Type<any> = PickerComponent;
}
