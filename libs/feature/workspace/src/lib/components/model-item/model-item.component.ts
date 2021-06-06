import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Resource } from '@platon/feature/workspace';

@Component({
  selector: 'ws-model-item',
  templateUrl: './model-item.component.html',
  styleUrls: ['./model-item.component.scss']
})
export class ModelItemComponent {
    @Input() item!: Resource;
    @Output() didTapTag = new EventEmitter<string>();
}
