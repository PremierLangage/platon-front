import { NgModule, Type } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { TextSelectComponent } from './text-select.component';

@NgModule({
    declarations: [TextSelectComponent],
    imports: [
        SharedModule
    ],
    exports: [TextSelectComponent],
})
export class TextSelectModule {
    customElementComponent: Type<any> = TextSelectComponent;
}
