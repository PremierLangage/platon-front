import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Resource } from '@platon/feature/workspace';

@Component({
  selector: 'ws-exercise-item',
  templateUrl: './exercise-item.component.html',
  styleUrls: ['./exercise-item.component.scss']
})
export class ExerciseItemComponent {
    @Input() item!: Resource;
    @Output() didTapTag = new EventEmitter<string>();
}
