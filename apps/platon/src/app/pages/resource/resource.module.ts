
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { ResourceComponent } from './resource.component';
import { ResourceRoutingModule } from './resource-routing.module';


@NgModule({
    declarations: [ResourceComponent],
    imports: [
        CommonModule,
        MatButtonModule,
        ResourceRoutingModule,
    ],
    providers: [],
})
export class ResourceModule {}
