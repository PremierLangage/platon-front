import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Resource } from '../../models/resource';

@Component({
  selector: 'ws-resource-list-item',
  templateUrl: './resource-list-item.component.html',
  styleUrls: ['./resource-list-item.component.scss']
})
export class ResourceListItemComponent {
    @Input() item!: Resource;
    @Output() didFilterByTag = new EventEmitter<string>();
}
