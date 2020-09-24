import { NgModule, Type } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { JsxComponent } from './jsx.component';

@NgModule({
    declarations: [JsxComponent],
    imports: [
        SharedModule
    ],
    exports: [JsxComponent],
})
export class JsxModule {
    customElementComponent: Type<any> = JsxComponent;
}
