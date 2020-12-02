
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { AdminPanelComponent } from './admin-panel.component';
import { AdminPanelRoutingModule } from './admin-panel-routing.module';


@NgModule({
    declarations: [AdminPanelComponent],
    imports: [
        CommonModule,
        MatButtonModule,
        AdminPanelRoutingModule,
    ],
    providers: [],
})
export class AdminPanelModule {}
