import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Circle } from '../../models/resource';

@Component({
  selector: 'ws-circle-item',
  templateUrl: './circle-item.component.html',
  styleUrls: ['./circle-item.component.scss']
})
export class CircleItemComponent {
    @Input() item!: Circle;
    @Output() didFilterByTag = new EventEmitter<string>();
}
