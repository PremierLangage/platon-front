import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Activity } from '../../models/resource';

@Component({
  selector: 'ws-activity-item',
  templateUrl: './activity-item.component.html',
  styleUrls: ['./activity-item.component.scss']
})
export class ActivityItemComponent {
    @Input() item!: Activity;
    @Output() didFilterByTag = new EventEmitter<string>();
}
