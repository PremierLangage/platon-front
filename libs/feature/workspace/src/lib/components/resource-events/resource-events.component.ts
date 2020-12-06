import { ChangeDetectionStrategy, Component, Input, OnChanges, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ResourceService } from '../../api/resource.service';
import { ResourceEvent, ResourceTypes } from '../../models/resource';

@Component({
  selector: 'ws-resource-events',
  templateUrl: './resource-events.component.html',
  styleUrls: ['./resource-events.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResourceEventsComponent implements OnChanges, OnDestroy {
    private subscription?: Subscription;

    @Input() resourceId?: number;
    @Input() resourceType?: ResourceTypes;

    events: ResourceEvent[] = [];

    constructor(
        private readonly resourceService: ResourceService
    ) { }

    ngOnChanges() {
        this.events = [];
        if (this.resourceId && this.resourceType) {
            this.subscription?.unsubscribe();
            this.subscription = this.resourceService.listEvents({
                resourceId: this.resourceId,
                resourceType: this.resourceType
            }).subscribe({
                next: e => {
                    this.events = e;
                },
                error: error => {
                    this.events = [];
                    console.error(error);
                }
            });
        }
    }

    ngOnDestroy() {
        this.subscription?.unsubscribe();
    }
}
