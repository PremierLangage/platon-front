import { AfterContentInit, ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { CardDisplay, CardItem } from "./card";


@Component({
    selector: 'ui-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {

    @Input() display!: CardDisplay;
    @Input() items?: CardItem[];


    ngOnChanges(): void {

    }

    ngAfterContentInit(): void {

    }

}
