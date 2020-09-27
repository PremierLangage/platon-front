import { NgModule, Type } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { SelectableDirective } from './selectable.directive';

import { TextSelectComponent } from './text-select.component';

@NgModule({
    declarations: [TextSelectComponent, SelectableDirective],
    imports: [
        SharedModule
    ],
    exports: [TextSelectComponent],
})
export class TextSelectModule {
    customElementComponent: Type<any> = TextSelectComponent;
}
