import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Activity } from '../../models/resource';

@Component({
  selector: 'ws-activity-list-item',
  templateUrl: './activity-list-item.component.html',
  styleUrls: ['./activity-list-item.component.scss']
})
export class ActivityListItemComponent {
    @Input() item!: Activity;
    @Output() didFilterByTag = new EventEmitter<string>();
}
