import { Injectable, OnDestroy, OnInit } from "@angular/core";
import { AuthService, AuthUser } from "@platon/core/auth";
import { AssetService } from "@platon/feature/workspace";
import { Asset, AssetList } from "libs/feature/workspace/src/lib/models/asset";
import { BehaviorSubject, lastValueFrom, Observable, Subscription } from "rxjs";

@Injectable()
export class AdminCoursPresenster implements OnDestroy {

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
    ) {

    }

    ngOnDestroy(): void {
        this.subscriptions.forEach(s => s.unsubscribe());
    }

    async refresh(): Promise<void> {
        try {
            this.initContext();
        } catch (error) {
            const status = (error as any).status || 500;
            if (status >= 400 && status < 500) {
                this.context.next({ state: 'NOT_FOUND' });
            } else {
                this.context.next({ state: 'SERVER_ERROR' });
            }
        }
    }

    private async initContext(): Promise<void> {
        const [user, cours] = await Promise.all([
            this.authService.ready(),
            lastValueFrom(this.assetService.get())
        ]);

        this.context.next({
            state: 'READY',
            user: user,
            cours: cours?.results.filter(c => c.type === 'COURS')
        });
    }

}

export interface Context {
    state: 'LOADING' | 'READY' | 'SERVER_ERROR' | 'NOT_FOUND' | 'UNAUTHORIZED';
    user?: AuthUser;
    cours?: Asset[];
}
