import { ChangeDetectionStrategy, Injector, Component, Input } from '@angular/core';
import { WebComponent, WebComponentHooks } from '../../web-components';
import { SortList, SortListComponentDefinition, SortListItem } from './sort-list';
import { moveItemInArray, CdkDragDrop } from '@angular/cdk/drag-drop';

@Component({
    selector: 'wc-sort-list',
    templateUrl: 'sort-list.component.html',
    styleUrls: ['sort-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
@WebComponent(SortListComponentDefinition)
export class SortListComponent implements WebComponentHooks<SortList> {
    @Input() state!: SortList;

    constructor(
        readonly injector: Injector
    ) {}

    onChangeState() {
        if (!Array.isArray(this.state.items)) {
            this.state.items = [];
        }
        this.state.items.forEach((item, index) => {
            if (typeof item === 'string') {
                this.state.items[index] = {
                    content: item,
                }
            }
        });
    }

    drop(event: CdkDragDrop<SortListItem[]>) {
        moveItemInArray(this.state.items, event.previousIndex, event.currentIndex);
    }

    trackBy(index: number, item: SortListItem) {
        return item.content || index;
    }
}
