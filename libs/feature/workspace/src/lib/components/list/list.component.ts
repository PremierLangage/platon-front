import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Circle, Resource } from '@platon/feature/workspace';

@Component({
  selector: 'ws-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
    @Input() items!: (Circle | Resource)[];
    @Output() didFilterByTag = new EventEmitter<string>();
}
