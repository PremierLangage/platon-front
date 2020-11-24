import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Circle } from '../../models/circle';

@Component({
  selector: 'circle-preview',
  templateUrl: './circle-preview.component.html',
  styleUrls: ['./circle-preview.component.scss']
})
export class CirclePreviewComponent {
    @Input() circle!: Circle;
    @Output() didFilterByTag = new EventEmitter<string>();
}
