import { Component, Input } from "@angular/core";

@Component({
    selector: 'ws-cours-card',
    templateUrl: './cours-card.component.html',
    styleUrls: ['./cours-card.component.scss']
})
export class CoursCardComponent {

    @Input() item?: CoursCard;

}

interface CoursCard {
    name?: string;
    type?: string;
    coverImage?: string;
}
