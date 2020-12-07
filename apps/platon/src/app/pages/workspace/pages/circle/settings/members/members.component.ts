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
import { Member } from '@platon/feature/workspace';
import { Subscription } from 'rxjs';
import { CirclePageContext, CircleService } from '../../circle.service';

@Component({
    selector: 'app-circle-settings-members',
    templateUrl: './members.component.html',
    styleUrls: ['./members.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MembersComponent implements OnInit, OnDestroy {
    private readonly subscriptions: Subscription[] = [];

    @HostBinding('class')
    readonly hostClass = 'mat-elevation-z2';

    context: CirclePageContext = {
        state: 'LOADING',
        members: [],
    };

    loading = false;

    constructor(
        private readonly circleService: CircleService,
        private readonly changeDetector: ChangeDetectorRef
    ) {}

    ngOnInit() {
        this.subscriptions.push(
            this.circleService.context.subscribe((context) => {
                this.context = context;
                this.changeDetector.markForCheck();
            })
        );
    }

    ngOnDestroy() {
        this.subscriptions.forEach((s) => s.unsubscribe());
    }

    add(users: AuthUser[]) {
        this.circleService.addMembers(
            ...users.map((e) => {
                return {
                    id: e.id,
                    picture: e.picture,
                    userName: e.userName,
                    lastName: e.lastName,
                    firstName: e.firstName,
                    isAdmin: e.isAdmin,
                    circleId: this.context.circle!.id,
                } as Member;
            })
        );
    }

    remove(member: Member) {
        this.circleService.removeMembers(member);
    }
}
