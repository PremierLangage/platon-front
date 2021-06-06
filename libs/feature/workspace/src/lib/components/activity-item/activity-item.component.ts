import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Resource } from '@platon/feature/workspace';

@Component({
  selector: 'ws-activity-item',
  templateUrl: './activity-item.component.html',
  styleUrls: ['./activity-item.component.scss']
})
export class ActivityItemComponent {
    @Input() item!: Resource;
    @Output() didTapTag = new EventEmitter<string>();
}
