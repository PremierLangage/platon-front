import { Injectable, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AuthService, AuthUser } from "@platon/core/auth";
import { AssetService, ExersiceDetail } from "@platon/feature/workspace";
import { BehaviorSubject, firstValueFrom, Observable, Subscription } from "rxjs";


@Injectable()
export class LivePresenter implements OnDestroy {
    private readonly subscriptions: Subscription[] = [];
    private readonly context = new BehaviorSubject<Context>(this.defaultContext);

    get defaultContext(): Context {
        return { state: 'LOADING' };
    }

    get contextChange(): Observable<Context> {
        return this.context.asObservable();
    }

    constructor(
        private readonly authService: AuthService,
        private readonly assetService: AssetService,
        private readonly activatedRoute: ActivatedRoute,
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

    private async getLiveContent(resourceId: number): Promise<void> {
        // const [user, asset] = await Promise.all([
        //     this.authService.ready(),
        //     firstValueFrom(this.assetService.getLive(resourceId))
        // ]);

        // this.context.next({
        //     state: 'READY',
        //     user,
        //     asset
        // });
    }

    private async onChangeRoute(resrouceId: number): Promise<void> {
        try {
            this.getLiveContent(resrouceId);
        } catch (error) {
            const status = (error as any).status || 500;
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
    form?: ExersiceDetail;
}
