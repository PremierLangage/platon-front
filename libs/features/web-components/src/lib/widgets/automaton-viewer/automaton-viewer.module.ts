import { NgModule, Type } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { AutomatonViewerComponent } from './automaton-viewer.component';

@NgModule({
    declarations: [AutomatonViewerComponent],
    imports: [
        SharedModule
    ],
    exports: [AutomatonViewerComponent],
})
export class AutomatonViewerModule {
    customElementComponent: Type<any> = AutomatonViewerComponent;
}
