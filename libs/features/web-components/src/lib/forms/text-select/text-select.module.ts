import { NgModule, Type } from '@angular/core';
import { BaseModule } from '../../shared//components/base/base.module';

import { TextSelectComponent } from './text-select.component';

@NgModule({
    declarations: [TextSelectComponent],
    imports: [
        BaseModule
    ],
    exports: [TextSelectComponent],
})
export class TextSelectModule {
    customElementComponent: Type<any> = TextSelectComponent;
}
