import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cours } from '../../models/asset';

@Component({
    selector: 'ws-cours-item',
    templateUrl: './cours-item.component.html',
    styleUrls: ['./cours-item.component.scss'],
})
export class CoursItemComponent {
    @Input() item!: Cours;
}
