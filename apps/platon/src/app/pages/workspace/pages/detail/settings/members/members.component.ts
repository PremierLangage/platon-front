// tslint:disable: no-non-null-assertion
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    HostBinding,
    OnDestroy,
    OnInit,
} from '@angular/core';
import { AuthUser } from '@platon/core/auth';
import { Member, Resource, PublishableResource } from '@platon/feature/workspace';
import { Subscription } from 'rxjs';
import { DetailContext, DetailService } from '../../detail.service';

@Component({
    selector: 'app-ws-detail-settings-members',
    templateUrl: './members.component.html',
    styleUrls: ['./members.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MembersComponent implements OnInit, OnDestroy {
    private readonly subscriptions: Subscription[] = [];

    @HostBinding('class')
    readonly hostClass = 'mat-elevation-z2';

    context: DetailContext = {
        state: 'LOADING',
        events: [],
        members: [],
    };

    loading = false;

    constructor(
        private readonly detailService: DetailService,
        private readonly changeDetector: ChangeDetectorRef
    ) {}

    ngOnInit() {
        this.subscriptions.push(
            this.detailService.context.subscribe((context) => {
                this.context = context;
                this.changeDetector.markForCheck();
            })
        );
    }

    ngOnDestroy() {
        this.subscriptions.forEach((s) => s.unsubscribe());
    }

    add(users: AuthUser[]) {
        let circleId = -1;
        const resource = this.context.resource as Resource;
        switch (resource.type) {
            case 'CIRCLE':
                circleId = resource.id;
                break;
            default:
                circleId = (resource as PublishableResource).circle.id;
                break;
        }
        this.detailService.addMembers(
            ...users.map((e) => {
                return {
                    id: e.id,
                    username: e.username,
                    lastName: e.lastName,
                    firstName: e.firstName,
                    isAdmin: e.isAdmin,
                    circleId,
                } as Member;
            })
        );
    }

    remove(member: Member) {
        this.detailService.removeMembers(member);
    }
}
