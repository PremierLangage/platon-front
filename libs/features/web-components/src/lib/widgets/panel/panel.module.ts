import { NgModule, Type } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '../../shared/shared.module';
import { PanelComponent } from './panel.component';

@NgModule({
    declarations: [PanelComponent],
    imports: [
        SharedModule,
        MatIconModule,
    ],
    exports: [PanelComponent],
})
export class PanelModule {
    customElementComponent: Type<any> = PanelComponent;
}
