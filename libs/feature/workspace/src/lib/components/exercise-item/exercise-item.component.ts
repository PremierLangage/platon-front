import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Exercise } from '../../models/resource';

@Component({
  selector: 'ws-exercise-item',
  templateUrl: './exercise-item.component.html',
  styleUrls: ['./exercise-item.component.scss']
})
export class ExerciseItemComponent {
    @Input() item!: Exercise;
    @Output() didFilterByTag = new EventEmitter<string>();
}
