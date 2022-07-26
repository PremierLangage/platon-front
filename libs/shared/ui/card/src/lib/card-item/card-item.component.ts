import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { CardItem, CardDisplay } from "../card";



@Component({
    selector: 'ui-card-item',
    templateUrl: './card-item.component.html',
    styleUrls: ['./card-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardItemComponent {

    @Input() display!: CardDisplay;
    @Input() item?: CardItem;

}


