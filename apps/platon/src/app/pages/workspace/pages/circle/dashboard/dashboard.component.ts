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
                if (context.state === 'READY') {
                    this.unsubscribe();
                    this.loadMembers();
                }
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

    private unsubscribe() {
        this.subscriptions.forEach((s, i) => {
            if (i > 0) {
                s.unsubscribe();
            }
        });
        this.subscriptions.splice(1, this.subscriptions.length);
    }

    private loadMembers() {
        this.subscriptions.push(
            this.circleService.listMembers().subscribe((contributors) => {
                this.admins = [];
                this.members = [];
                contributors.forEach((contributor) => {
                    if (!contributor.isPending) {
                        if (contributor.isAdmin) {
                            this.admins.push(contributor);
                        } else {
                            this.members.push(contributor);
                        }
                    }
                });
                this.changeDetector.markForCheck();
            })
        );
    }
}
