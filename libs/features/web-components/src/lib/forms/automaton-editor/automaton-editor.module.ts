import { NgModule, Type } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { AutomatonEditorComponent } from './automaton-editor.component';

@NgModule({
    declarations: [AutomatonEditorComponent],
    imports: [
        SharedModule
    ],
    exports: [AutomatonEditorComponent],
})
export class AutomatonEditorModule {
    customElementComponent: Type<any> = AutomatonEditorComponent;
}
