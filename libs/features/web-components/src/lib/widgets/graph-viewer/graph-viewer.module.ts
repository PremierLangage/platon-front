import { NgModule, Type } from '@angular/core';
import { RenderDotModule } from '../../shared/directives/render-dot.directive';
import { SharedModule } from '../../shared/shared.module';

import { GraphViewerComponent } from './graph-viewer.component';

@NgModule({
    declarations: [GraphViewerComponent],
    imports: [
        SharedModule,
        RenderDotModule,
    ],
    exports: [GraphViewerComponent],
})
export class GraphViewerModule {
    customElementComponent: Type<any> = GraphViewerComponent;
}
