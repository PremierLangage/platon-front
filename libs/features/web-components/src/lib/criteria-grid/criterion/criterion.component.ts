import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Criterion, Level } from '../models/criteria-grid.models';

@Component({
  selector: 'app-criterion',
  templateUrl: './criterion.component.html',
  styleUrls: ['./criterion.component.scss']
})
export class CriterionComponent implements OnInit {
  @Input() item !: Criterion;
  @Input() disabled = false;
  @Input() canMoveUp = false;
  @Input() canMoveDown = false;
  @Input() canDelete = false;

  @Output() delete = new EventEmitter<Criterion>();
  @Output() moveUp = new EventEmitter<Criterion>();
  @Output() moveDown = new EventEmitter<Criterion>();

  constructor() {  }

  ngOnInit() {
  }

  deleteLevel(level: Level) {
    this.item.levels = this.item.levels.filter(
      e => e.id !== level.id
    );
  }

  addLevel() {
    let id = 0;
    let points = 0;
    for (const level of this.item.levels) {
      points = level.points + 1;
      if (level.id >= id) {
        id = level.id + 1;
      }
    }

    this.item.levels.push({
      id,
      points,
      description: '',
    });
  }

}
