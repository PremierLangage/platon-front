import { NgModule, Type } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { GraphViewerComponent } from './graph-viewer.component';

@NgModule({
    declarations: [GraphViewerComponent],
    imports: [
        SharedModule
    ],
    exports: [GraphViewerComponent],
})
export class GraphViewerModule {
    customElementComponent: Type<any> = GraphViewerComponent;
}
