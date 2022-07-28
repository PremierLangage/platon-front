import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { CardDisplay, CardItemTags } from "../card";



@Component({
    selector: 'ui-card-item',
    templateUrl: './card-item.component.html',
    styleUrls: ['./card-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardItemComponent {

    @Input() display!: CardDisplay;
    @Input() title?: string;
    @Input() description?: string;

    @Input() tags?: CardItemTags[];

}


