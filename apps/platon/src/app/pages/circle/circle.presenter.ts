import { Injectable, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService, AuthUser } from '@platon/core/auth';
import { Circle, CircleEvent, CircleMember, CircleService, CircleWatcher, Invitation, UpdateCircleForm } from '@platon/feature/workspace';
import { PageResult } from '@platon/shared/utils';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { BehaviorSubject, forkJoin, Observable, Subscription } from 'rxjs';

@Injectable()
export class CirclePresenter implements OnDestroy {
    private readonly subscriptions: Subscription[] = [];
    private readonly state = new BehaviorSubject<PresenterState>(this.loadingState);

    get loadingState(): PresenterState {
        return {
            state: 'LOADING'
        };
    }

    get stateChange(): Observable<PresenterState> {
        return this.state.asObservable();
    }

    constructor(
        private readonly authService: AuthService,
        private readonly circleService: CircleService,
        private readonly activatedRoute: ActivatedRoute,
        private readonly notificationService: NzNotificationService,

    ) {
        this.subscriptions.push(
            this.activatedRoute.params.subscribe(params => {
                this.onChangeRoute(Number.parseInt(params.id + '', 10));
            })
        );
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach(s => s.unsubscribe());
    }

    async watch(): Promise<void> {
        const { circle } = this.state.value as Required<PresenterState>;

        try {
            await this.circleService.createWatcher(circle).toPromise();
            await this.refreshState(circle.id);
        } catch {
            this.alertError();
        }
    }

    async unwatch(): Promise<void> {
        const { circle, watcher } = this.state.value as Required<PresenterState>;

        try {
            await this.circleService.deleteWatcher(watcher).toPromise();
            await this.refreshState(circle.id);
        } catch {
            this.alertError();
        }
    }

    async acceptInvitation(): Promise<void> {
        const { circle, invitation } = this.state.value as Required<PresenterState>;
        try {
            await this.circleService.acceptInvitation(invitation).toPromise();
            await this.refreshState(circle.id);
        } catch {
            this.alertError();
        }
    }

    async declineInvitation(): Promise<void> {
        const { circle, invitation } = this.state.value as Required<PresenterState>;;
        try {
            await this.circleService.deleteInvitation(invitation).toPromise();
            await this.refreshState(circle.id);
        } catch {
            this.alertError();
        }
    }

    async listEvents(): Promise<PageResult<CircleEvent>> {
        const { circle } = this.state.value as Required<PresenterState>;
        if (!circle) {
            return {
                count: 0,
                results: []
            };
        }
        return this.circleService.listEvents(circle).toPromise();
    }

    async updateCircle(form: Omit<UpdateCircleForm, 'circle'>) {
        const { circle } = this.state.value as Required<PresenterState>;;
        try {
            const newCircle = await this.circleService.updateCircle({
                circle,
                ...form
            }).toPromise();

            this.state.next({
                ...this.state.value,
                circle: newCircle,
            });
            this.notificationService.success(
                'Les informations du cercle ont bien été modifiées !',
                ''
            );
        } catch {
            this.alertError();
        }
    }

    private async refreshState(circleId: number) {
        const [user, circle] = await Promise.all([
            this.authService.ready(),
            this.circleService.findById(circleId).toPromise()
        ]);

        const [member, watcher, invitation] = await forkJoin([
            this.circleService.findMember(circle!, user!.username),
            this.circleService.findWatcher(circle!, user!.username),
            this.circleService.findInvitation(circle!, user!.username),
        ]).toPromise();

        this.state.next({
            state: 'READY',
            user,
            circle,
            member,
            watcher,
            invitation,
            isAdmin: user!.isAdmin || member?.status === 'ADMIN',
            isMember: user!.isAdmin || !!member,
        });
    }

    private async onChangeRoute(id: number): Promise<void> {
        this.state.next({ state: 'LOADING' });
        try {
            this.refreshState(id);
        } catch (error) {
            const status = error.status || 500;
            if (status >= 400 && status < 500) {
                this.state.next({ state: 'NOT_FOUND' });
            } else {
                this.state.next({ state: 'SERVER_ERROR' });
            }
        }
    }

    private alertError() {
        this.notificationService.error(
            'Une erreur est survenue lors de cette action, veuillez réessayer un peu plus tard !',
            '',
        );
    }
}

export interface PresenterState {
    state: 'LOADING' | 'READY' | 'SERVER_ERROR' | 'NOT_FOUND' | 'UNAUTHORIZED';
    user?: AuthUser;
    circle?: Circle;
    watcher?: CircleWatcher;
    member?: CircleMember;
    invitation?: Invitation;
    isAdmin?: boolean;
    isMember?: boolean;
}
