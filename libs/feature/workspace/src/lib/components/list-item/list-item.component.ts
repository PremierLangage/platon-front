import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Circle, Resource } from '@platon/feature/workspace';

@Component({
  selector: 'ws-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent {
    @Input() item!: (Circle | Resource);
    @Output() didFilterByTag = new EventEmitter<string>();

    isCircle(item: any): boolean {
        return !('status' in item);
    }
}
