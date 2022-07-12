import { Injectable, OnDestroy } from "@angular/core";
import { AuthService, AuthUser } from "@platon/core/auth";
import { AssetService } from "@platon/feature/workspace";
import { AssetList } from "libs/feature/workspace/src/lib/models/asset";
import { BehaviorSubject, lastValueFrom, Observable, Subscription } from "rxjs";

@Injectable()
export class DashboardPresenter implements OnDestroy {
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
        private readonly assetService: AssetService
    ) {
    }

    async initContext(): Promise<void> {
        try {
            const [user, assets] = await Promise.all([
                this.authService.ready(),
                this.assetService.me().toPromise()
            ]);
            this.context.next({
                state: 'READY',
                user,
                assets
            });
        } catch (error) {
            const status = (error as any).status || 500;
            if (status >= 400 && status < 500) {
                this.context.next({ state: 'NOT_FOUND' });
            } else {
                this.context.next({ state: 'SERVER_ERROR' });
            }
        }
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach(s => s.unsubscribe());
    }

}


export interface Context {
    state: 'LOADING' | 'READY' | 'SERVER_ERROR' | 'NOT_FOUND' | 'UNAUTHORIZED';
    user?: AuthUser;
    assets?: AssetList;
}
