import { NgModule, Type } from '@angular/core';
import { RenderDotModule } from '../../shared/directives/render-dot.directive';
import { SharedModule } from '../../shared/shared.module';

import { AutomatonViewerComponent } from './automaton-viewer.component';

@NgModule({
    declarations: [AutomatonViewerComponent],
    imports: [
        SharedModule,
        RenderDotModule
    ],
    exports: [AutomatonViewerComponent],
})
export class AutomatonViewerModule {
    customElementComponent: Type<any> = AutomatonViewerComponent;
}
