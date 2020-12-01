import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Exercise } from '../../models/resource';

@Component({
  selector: 'ws-exercise-list-item',
  templateUrl: './exercise-list-item.component.html',
  styleUrls: ['./exercise-list-item.component.scss']
})
export class ExerciseListItemComponent {
    @Input() item!: Exercise;
    @Output() didFilterByTag = new EventEmitter<string>();
}
