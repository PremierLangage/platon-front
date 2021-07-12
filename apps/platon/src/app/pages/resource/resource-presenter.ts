import { Injectable, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService, AuthUser } from '@platon/core/auth';
import { Resource, ResourceService } from '@platon/feature/workspace';
import { NzMessageService } from 'ng-zorro-antd/message';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';

@Injectable()
export class ResourcePresenter implements OnDestroy {
    private readonly subscriptions: Subscription[] = [];
    private readonly context = new BehaviorSubject<Context>(this.defaultContext);

    get defaultContext(): Context {
        return {
            state: 'LOADING'
        };
    }

    get contextChange(): Observable<Context> {
        return this.context.asObservable();
    }


    constructor(
        private readonly authService: AuthService,
        private readonly activatedRoute: ActivatedRoute,
        private readonly messageService: NzMessageService,
        private readonly resourceService: ResourceService,
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

    private async refresh(resourceId: number): Promise<void> {
        const [user, resource] = await Promise.all([
            this.authService.ready(),
            this.resourceService.findById(resourceId).toPromise()
        ]);

        this.context.next({
            state: 'READY',
            user,
            resource,
        });
    }

    private async onChangeRoute(circleId: number): Promise<void> {
        try {
            this.refresh(circleId);
        } catch (error) {
            const status = error.status || 500;
            if (status >= 400 && status < 500) {
                this.context.next({ state: 'NOT_FOUND' });
            } else {
                this.context.next({ state: 'SERVER_ERROR' });
            }
        }
    }
}


export interface Context {
    state: 'LOADING' | 'READY' | 'SERVER_ERROR' | 'NOT_FOUND' | 'UNAUTHORIZED';
    user?: AuthUser;
    resource?: Resource;
}
