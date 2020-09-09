import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { WebComponent, WebComponentEvents } from '../web-components';
import { CriteriaGrid, CriteriaGridComponentDefinition } from './criteria-grid';
import { Criterion } from './models/criteria-grid.models';
import { CriteriaGridService } from './criteria-grid.service';

@Component({
    selector: 'wc-criteria-grid',
    templateUrl: 'criteria-grid.component.html',
    styleUrls: ['criteria-grid.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
@WebComponent(CriteriaGridComponentDefinition)
export class CriteriaGridComponent implements WebComponentEvents<CriteriaGrid> {
    items: Criterion[] = [];
    @Input() state!: CriteriaGrid;

    constructor(
        private readonly grid: CriteriaGridService,
        private readonly changeDetector: ChangeDetectorRef
    ) {}

    onAfterSerialize(state: CriteriaGrid) {
        // state validation logic goes here
        return state;
    }

    onAfterDeserialize() {
        this.changeDetector.detectChanges();
    }

    ngOnInit() {
        this.items = this.grid.getCriteres();
    }

    addCritere() {
        this.grid.addCritere();
    }

    deleteCritere(item: Criterion) {
        this.grid.deleteCritere(item);
    }

    moveUp(item: Criterion) {
        let index:number = this.items.indexOf(item);
        let tmp:Criterion = this.items[index];
        this.items[index] = this.items[index-1];
        this.items[index-1]=tmp;
    }

    moveDown(item: Criterion) {
        let index:number = this.items.indexOf(item);
        let tmp:Criterion = this.items[index];
        this.items[index] = this.items[index+1];
        this.items[index+1]=tmp;
    }

    trackBy(_: number, item: Criterion) {
        return item.id;
    }
}
