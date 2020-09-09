import { Injectable } from '@angular/core';
import { Criterion } from './models/criteria-grid.models';

@Injectable({
  providedIn: 'root'
})
export class CriteriaGridService {

constructor() { }

private nextId = 0;
  private items: Criterion[] = [
    {
      id: 0,
      description: '1er critere',
      levels: [
        { id: 0, description: 'insuffisant', points: 0 },
        { id: 1, description: 'correct', points: 1 },
        { id: 2, description: 'super', points: 2 },
      ],
    },
  ];

  getCriteres() {
    return this.items;
  }

  addCritere() {
    const newItem: Criterion = {
      id: ++this.nextId,
      description: '',
      levels: []
    };

    const last = this.items[this.items.length - 1];
    last.levels.forEach((e) => {
      newItem.levels.push({
        id: e.id,
        description: '',
        points: e.points });
    });
    this.items.push(newItem);
  }

  deleteCritere(item: Criterion) {
    const index = this.items.findIndex(e => e.id === item.id);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }


}
