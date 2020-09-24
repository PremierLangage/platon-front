import { NgModule, Type } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { InputBoxComponent } from './input-box.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [InputBoxComponent],
    imports: [
        SharedModule,

        FormsModule,
        ReactiveFormsModule,

        MatInputModule,
        MatFormFieldModule,
        MatAutocompleteModule
    ],
    exports: [InputBoxComponent],
})
export class InputBoxModule {
    customElementComponent: Type<any> = InputBoxComponent;
}
