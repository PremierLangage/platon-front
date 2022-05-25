import { Injectable, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService, AuthUser } from '@platon/core/auth';
import {
    Asset,
    AssetService,
    Platon,
    RunnerService,
} from '@platon/feature/workspace';
import { BehaviorSubject, lastValueFrom, Observable, Subscription } from 'rxjs';

@Injectable()
export class AssetPresenter implements OnDestroy {
    private readonly subscriptions: Subscription[] = [];
    private readonly context = new BehaviorSubject<Context>(
        this.defaultContext
    );

    get defaultContext(): Context {
        return { state: 'LOADING' };
    }

    get contextChange(): Observable<Context> {
        return this.context.asObservable();
    }

    constructor(
        private readonly authService: AuthService,
        private readonly activatedRoute: ActivatedRoute,
        private readonly assetService: AssetService
    ) {
        this.activatedRoute.params.subscribe((params) => {
            this.onChangeRoute(Number.parseInt(params.id + '', 10));
        });
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach((s) => s.unsubscribe());
    }

    private async refresh(assetId: number): Promise<void> {
        const [user, asset] = await Promise.all([
            this.authService.ready(),
            lastValueFrom(this.assetService.findById(assetId)),
        ]);
        this.context.next({
            state: 'READY',
            user,
            asset,
        });
    }

    private async onChangeRoute(assetId: number): Promise<void> {
        try {
            this.refresh(assetId);
        } catch (error) {
            const status = (error as any).status || 500;
            if (status >= 400 && status < 500) {
                this.context.next({ state: 'NOT_FOUND' });
            } else {
                this.context.next({ state: 'SERVER_ERROR' });
            }
        }
    }

    private async renderAsset(asset: Asset): Promise<void> {}
}

export interface Context {
    state: 'LOADING' | 'READY' | 'SERVER_ERROR' | 'NOT_FOUND' | 'UNAUTHORIZED';
    user?: AuthUser;
    asset?: Asset;
    platon?: Platon;
}
