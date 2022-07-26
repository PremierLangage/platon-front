import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { NzGridModule } from 'ng-zorro-antd/grid';

import { CardItemComponent } from "./card-item/card-item.component";
import { CardComponent } from "./card.component";

@NgModule({
    imports: [
        CommonModule,

        NzGridModule,

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
