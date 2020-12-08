import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    OnDestroy,
    OnInit,
} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Member, PublishableResource, ResourceStatus } from '@platon/feature/workspace';
import { deepCopy } from '@platon/shared/utils';
import { Subscription } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { DetailContext, DetailService } from '../detail.service';

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

    statusControl = new FormControl('', [Validators.required]);

    context: DetailContext = {
        state: 'LOADING',
        events: [],
        members: []
    };

    admins: Member[] = [];
    members: Member[] = [];

    constructor(
        private readonly detailService: DetailService,
        private readonly changeDetector: ChangeDetectorRef
    ) {}

    ngOnInit() {
        this.subscriptions.push(
            this.detailService.context.subscribe((context) => {
                this.context = context;

                this.statusControl.enable();
                if (!this.context.isAdmin) {
                    this.statusControl.disable();
                }

                if (context.state === 'READY' && context.resource?.type !== 'CIRCLE') {
                    this.statusControl.patchValue((context.resource as PublishableResource).status);
                }

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

        this.subscriptions.push(
            this.statusControl.valueChanges.pipe(
                distinctUntilChanged()
            ).subscribe(value => {
                const copy = deepCopy(this.context.resource) as PublishableResource;
                if (value !== copy.status) {
                    copy.status = value;
                    this.detailService.update(copy);
                }
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
