// ANGULAR
import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// LIBS

// MODULE
import { MatInputModule } from '@angular/material/input';
import { TextInputComponent } from './text-input.component';

@NgModule({
    declarations: [TextInputComponent],
    imports: [
        CommonModule,
        FormsModule,
        MatInputModule
    ],
    exports: [TextInputComponent],
})
export class TextInputModule {
    customElementComponent: Type<any> = TextInputComponent;
}
