import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatInputModule } from '@angular/material/input';
import { PlatonInputComponent } from './platon-input.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [PlatonInputComponent],
    imports: [
        CommonModule,
        FormsModule,
        MatInputModule
    ],
    exports: [PlatonInputComponent],
})
export class PlatonInputModule {
    customElementComponent: Type<any> = PlatonInputComponent;
}
