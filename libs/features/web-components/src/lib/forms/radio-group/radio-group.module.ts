import { NgModule, Type } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { MatRadioModule } from '@angular/material/radio';
import { RadioGroupComponent } from './radio-group.component';
import { FormsModule } from '@angular/forms';
import { NgeMarkdownModule } from 'nge-markdown';

@NgModule({
    declarations: [RadioGroupComponent],
    imports: [
        SharedModule,
        FormsModule,
        MatRadioModule,
        NgeMarkdownModule,
    ],
    exports: [RadioGroupComponent],
})
export class RadioGroupModule {
    customElementComponent: Type<any> = RadioGroupComponent;
}
