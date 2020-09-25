import { NgModule, Type } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { CheckboxGroupComponent } from './checkbox-group.component';
import { NgeMarkdownModule } from 'nge-markdown';

@NgModule({
    declarations: [CheckboxGroupComponent],
    imports: [
        SharedModule,
        MatCheckboxModule,
        NgeMarkdownModule,
    ],
    exports: [CheckboxGroupComponent],
})
export class CheckboxGroupModule {
    customElementComponent: Type<any> = CheckboxGroupComponent;
}
