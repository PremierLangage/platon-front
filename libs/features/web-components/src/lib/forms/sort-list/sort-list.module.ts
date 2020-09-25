import { NgModule, Type } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { SortListComponent } from './sort-list.component';
import { NgeMarkdownModule } from 'nge-markdown';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    declarations: [SortListComponent],
    imports: [
        SharedModule,
        MatIconModule,
        DragDropModule,
        NgeMarkdownModule,
    ],
    exports: [SortListComponent],
})
export class SortListModule {
    customElementComponent: Type<any> = SortListComponent;
}
