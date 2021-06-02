import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ws-circle-item',
  templateUrl: './circle-item.component.html',
  styleUrls: ['./circle-item.component.scss']
})
export class CircleItemComponent {
    @Input() item!: any;
    @Output() didFilterByTag = new EventEmitter<string>();
}
