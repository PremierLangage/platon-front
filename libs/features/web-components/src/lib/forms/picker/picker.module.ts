import { NgModule, Type } from '@angular/core';
import { BaseModule } from '../../shared/components/base/base.module';

import { PickerComponent } from './picker.component';

@NgModule({
    declarations: [PickerComponent],
    imports: [
        BaseModule
    ],
    exports: [PickerComponent],
})
export class PickerModule {
    customElementComponent: Type<any> = PickerComponent;
}
