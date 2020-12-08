import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Resource } from '../../models/resource';

@Component({
  selector: 'ws-resource-item',
  templateUrl: './resource-item.component.html',
  styleUrls: ['./resource-item.component.scss']
})
export class ResourceItemComponent {
    @Input() item!: Resource;
    @Output() didFilterByTag = new EventEmitter<string>();
}
