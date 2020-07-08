import { NgModule, Type } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { <%= classify(name) %>Component } from './<%= name %>.component';

@NgModule({
    declarations: [<%= classify(name) %>Component],
    imports: [
        SharedModule
    ],
    exports: [<%= classify(name) %>Component],
})
export class <%= classify(name) %>Module {
    customElementComponent: Type<any> = <%= classify(name) %>Component;
}
