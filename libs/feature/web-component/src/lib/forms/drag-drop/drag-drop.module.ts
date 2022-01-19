import { NgModule, Type } from '@angular/core';

import { IDynamicModule } from '@mcisse/nge/services';
import { NgeMarkdownModule } from '@mcisse/nge/markdown';

import { BaseModule } from '../../shared/components/base/base.module';
import { CssPipeModule } from '../../shared/pipes/css.pipe';
import { DragDropComponent } from './drag-drop.component';
import { DragDropDirective } from './drag-drop.directive';
import { DragDropService } from './drag-drop.service';

@NgModule({
    declarations: [DragDropComponent, DragDropDirective],
    imports: [
        BaseModule,
        CssPipeModule,
        NgeMarkdownModule,
    ],
    exports: [DragDropComponent],
    providers: [DragDropService]
})
export class DragDropModule implements IDynamicModule {
    component: Type<any> = DragDropComponent;
}
