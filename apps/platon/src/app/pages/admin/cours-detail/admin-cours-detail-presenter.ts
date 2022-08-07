import { Injectable, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AuthService, AuthUser } from "@platon/core/auth";
import { AssetService } from "@platon/feature/workspace";
import { Asset } from "libs/feature/workspace/src/lib/models/asset";
import { BehaviorSubject, firstValueFrom, Observable, Subscription } from "rxjs";


@Injectable()
export class AdminCoursDetailPresenter implements OnDestroy {

    private readonly subscriptions: Subscription[] = [];
    private readonly context = new BehaviorSubject<Context>(this.defaultContext);

    private slug!: string;

    get defaultContext(): Context {
        return { state: 'LOADING' };
    }

    get contextChange(): Observable<Context> {
        return this.context.asObservable();
    }

    constructor(
        private readonly activatedRoute: ActivatedRoute,
        private readonly authService: AuthService,
        private readonly assetService: AssetService,
    ) {
        this.subscriptions.push(
            this.activatedRoute.params.subscribe(params => {
                this.onChangeRoute(params.slug);
                this.slug = params.slug;
            })
        );
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach(s => s.unsubscribe());
    }

    private async refresh(path: string): Promise<void> {
        const [user, cours] = await Promise.all([
            this.authService.ready(),
            firstValueFrom(this.assetService.getAssetByPath(path))
        ]);

        this.context.next({
            state: 'READY',
            user,
            cours
        });
    }

    private async onChangeRoute(slug: string): Promise<void> {
        try {
            this.refresh(slug);
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
    cours?: Asset;
}
