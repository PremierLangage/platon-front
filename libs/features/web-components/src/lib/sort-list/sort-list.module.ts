import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SortListComponent } from './sort-list.component';

@NgModule({
    declarations: [SortListComponent],
    imports: [
        CommonModule
    ],
    exports: [SortListComponent],
})
export class SortListModule {
    customElementComponent: Type<any> = SortListComponent;
}
