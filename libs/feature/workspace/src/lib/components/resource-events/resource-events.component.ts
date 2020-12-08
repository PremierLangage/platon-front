import {
    ChangeDetectionStrategy,
    Component,
    Input,
    OnChanges,
} from '@angular/core';
import { ResourceEvent } from '../../models/resource';

@Component({
    selector: 'ws-resource-events',
    templateUrl: './resource-events.component.html',
    styleUrls: ['./resource-events.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResourceEventsComponent implements OnChanges {
    @Input() events: ResourceEvent[] = [];

    ngOnChanges() {
        if (this.events) {
            this.events = this.events.sort((a, b) => b.date - a.date);
        }
    }

    trackById(_: number, item: ResourceEvent) {
        return item.id;
    }
}
