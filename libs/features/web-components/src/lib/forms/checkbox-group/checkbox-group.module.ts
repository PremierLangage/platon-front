import { NgModule, Type } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { CheckboxGroupComponent } from './checkbox-group.component';

@NgModule({
    declarations: [CheckboxGroupComponent],
    imports: [
        SharedModule
    ],
    exports: [CheckboxGroupComponent],
})
export class CheckboxGroupModule {
    customElementComponent: Type<any> = CheckboxGroupComponent;
}
