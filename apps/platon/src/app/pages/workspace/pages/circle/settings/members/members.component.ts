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
    };

    contributors: Member[] = [];
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
                if (context.state === 'READY') {
                    this.onReady();
                }
            })
        );
    }

    ngOnDestroy() {
        this.subscriptions.forEach((s) => s.unsubscribe());
    }

    remove(contributor: Member) {
        this.circleService.removeMembers(contributor);
    }

    invite(users: AuthUser[]) {
        this.circleService.addMembers(
            ...users.map((e) => {
                return {
                    id: e.id,
                    picture: e.picture,
                    userName: e.userName,
                    lastName: e.lastName,
                    firstName: e.firstName,
                    isPending: true,
                    isAdmin: e.isAdmin,
                    circleId: this.context.circle!.id,
                };
            })
        );
    }

    private unsubscribe() {
        this.subscriptions.forEach((s, i) => {
            if (i > 0) {
                s.unsubscribe();
            }
        });
        this.subscriptions.splice(1, this.subscriptions.length);
    }

    private onReady() {
        this.loading = true;
        this.changeDetector.markForCheck();
        this.unsubscribe();
        this.subscriptions.push(
            this.circleService
                .listMembers()
                .subscribe({
                    next: response => {
                        this.loading = false;
                        this.contributors = response;
                        this.changeDetector.markForCheck();
                    },
                    error: error => {
                        console.error(error);
                        this.loading = false;
                        this.contributors = [];
                        this.changeDetector.markForCheck();
                    }
                })
        );
    }

}
