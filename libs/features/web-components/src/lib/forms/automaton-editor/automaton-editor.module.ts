import { NgModule, Type } from '@angular/core';
import { BaseModule } from '../../shared/components/base/base.module';

import { AutomatonEditorComponent } from './automaton-editor.component';

@NgModule({
    declarations: [AutomatonEditorComponent],
    imports: [
        BaseModule
    ],
    exports: [AutomatonEditorComponent],
})
export class AutomatonEditorModule {
    customElementComponent: Type<any> = AutomatonEditorComponent;
}
