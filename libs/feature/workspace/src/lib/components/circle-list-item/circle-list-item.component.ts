import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Circle } from '../../models/resource';

@Component({
  selector: 'ws-circle-list-item',
  templateUrl: './circle-list-item.component.html',
  styleUrls: ['./circle-list-item.component.scss']
})
export class CircleListItemComponent {
    @Input() item!: Circle;
    @Output() didFilterByTag = new EventEmitter<string>();
}
