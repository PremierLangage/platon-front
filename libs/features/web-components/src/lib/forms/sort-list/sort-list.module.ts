import { NgModule, Type } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { SortListComponent } from './sort-list.component';

@NgModule({
    declarations: [SortListComponent],
    imports: [
        SharedModule
    ],
    exports: [SortListComponent],
})
export class SortListModule {
    customElementComponent: Type<any> = SortListComponent;
}
