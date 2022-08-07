import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';

import { CardItemComponent } from "./card-item/card-item.component";
import { CardComponent } from "./card.component";
import { RouterModule } from "@angular/router";

@NgModule({
    imports: [
        CommonModule,
        RouterModule,

        NzGridModule,
        NzTagModule,
        NzIconModule,
        NzButtonModule,

    ],
    exports: [
        CardComponent,
        CardItemComponent,
    ],
    declarations: [
        CardComponent,
        CardItemComponent,
    ]
})
export class SharedUiCardModule { }
