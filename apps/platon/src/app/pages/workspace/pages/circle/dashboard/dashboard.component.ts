import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    OnDestroy,
    OnInit,
} from '@angular/core';
import { Member, ResourceStatus } from '@platon/feature/workspace';
import { Subscription } from 'rxjs';
import { CirclePageContext, CircleService } from '../circle.service';

@Component({
    selector: 'app-circle-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit, OnDestroy {
    private readonly subscriptions: Subscription[] = [];

    readonly status: ResourceStatus[] = [
        'DRAFT',
        'READY',
        'BUGGED',
        'NOT_TESTED',
        'DEPRECATED',
    ];

    context: CirclePageContext = {
        state: 'LOADING',
        members: []
    };

    admins: Member[] = [];
    members: Member[] = [];

    constructor(
        private readonly circleService: CircleService,
        private readonly changeDetector: ChangeDetectorRef
    ) {}

    ngOnInit() {
        this.subscriptions.push(
            this.circleService.context.subscribe((context) => {
                this.context = context;
                this.admins = [];
                this.members = [];
                context.members.forEach((member) => {
                    if (member.isAdmin) {
                        this.admins.push(member);
                    } else {
                        this.members.push(member);
                    }
                });
                this.changeDetector.markForCheck();
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
