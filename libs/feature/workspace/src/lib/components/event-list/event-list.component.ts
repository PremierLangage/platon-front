import { Component, Input } from '@angular/core';
import { CircleEvent } from '../../models/models';

@Component({
    selector: 'ws-event-list',
    templateUrl: './event-list.component.html',
    styleUrls: ['./event-list.component.scss']
})
export class EventListComponent {
    @Input() items: CircleEvent[] = [];

    trackById(_: number, item: CircleEvent) {
        return item.id;
    }
}
