import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { WebComponent, WebComponentEvents } from '../web-components';
import { SortList, SortListComponentDefinition } from './sort-list';

@Component({
    selector: 'wc-sort-list',
    templateUrl: 'sort-list.component.html',
    styleUrls: ['sort-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
@WebComponent(SortListComponentDefinition)
export class SortListComponent implements WebComponentEvents<SortList> {

    @Input() state!: SortList;

    constructor(
        private readonly changeDetector: ChangeDetectorRef
    ) {}

    onAfterSerialize(state: SortList) {
        // state validation logic goes here
        return state;
    }

    onAfterDeserialize() {
        this.changeDetector.detectChanges();
    }
}
