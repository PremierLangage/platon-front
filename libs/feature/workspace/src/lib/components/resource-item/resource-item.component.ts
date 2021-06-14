import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Resource } from '@platon/feature/workspace';

@Component({
  selector: 'ws-resource-item',
  templateUrl: './resource-item.component.html',
  styleUrls: ['./resource-item.component.scss']
})
export class ResourceItemComponent {
    @Input() item!: Resource;
    @Output() didTapTag = new EventEmitter<string>();
}
