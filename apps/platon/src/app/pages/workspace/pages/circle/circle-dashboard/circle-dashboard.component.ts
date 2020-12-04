import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { AuthUser } from '@platon/core/auth';
import {
    Circle,
    CircleEvent,
    Contributor,
    ResourceService,
    ResourceStatus
} from '@platon/feature/workspace';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-circle-dashboard',
    templateUrl: './circle-dashboard.component.html',
    styleUrls: ['./circle-dashboard.component.scss'],
})
export class CircleDashboardComponent implements OnInit, OnDestroy {
    private readonly subscriptions: Subscription[] = [];
    readonly status: ResourceStatus[] = [
        'DRAFT',
        'READY',
        'BUGGED',
        'NOT_TESTED',
        'DEPRECATED',
    ];

    events: CircleEvent[] = [];
    contributors: Contributor[] = [];

    @Input() user!: AuthUser;
    @Input() circle!: Circle;

    get admins() {
        return this.contributors.filter(e => e.isAdmin);
    }

    get members() {
        return this.contributors.filter(e => !e.isAdmin);
    }

    constructor(
        private readonly resourceService: ResourceService
    ) {}

    ngOnInit() {
        this.subscriptions.push(
            this.resourceService
                .listContributors(this.circle.id)
                .subscribe((contributors) => {
                    this.contributors = contributors;
                })
        );
    }

    ngOnDestroy() {
        this.subscriptions.forEach((s) => s.unsubscribe());
    }

    trackById(_: number, item: any) {
        return item.id;
    }
}
