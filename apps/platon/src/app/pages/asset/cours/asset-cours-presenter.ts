import { Injectable, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AuthService, AuthUser } from "@platon/core/auth";
import { AssetCoursDetail, AssetCoursService, AssetCoursSession } from "@platon/feature/workspace";
import { BehaviorSubject, firstValueFrom, lastValueFrom, Observable, Subscription } from "rxjs";


@Injectable()
export class AssetCoursPresenter implements OnDestroy {

    private readonly subscriptions: Subscription[] = [];
    private readonly context = new BehaviorSubject<Context>(this.defaultContext);

    private id!: string;

    get defaultContext(): Context {
        return { state: 'LOADING' };
    }

    get contextChange(): Observable<Context> {
        return this.context.asObservable();
    }

    constructor(
        private readonly authService: AuthService,
        private readonly assetCoursService: AssetCoursService,
        private readonly activatedRoute: ActivatedRoute,
    ) {
        this.subscriptions.push(
            this.activatedRoute.params.subscribe(params => {
                this.onChangeRoute(params.name);
                this.id = params.name;
            })
        )
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach(s => s.unsubscribe());
    }

    private async refresh(name: string): Promise<void> {
        const [user, asset, session] = await Promise.all([
            this.authService.ready(),
            lastValueFrom(this.assetCoursService.getByName(name)),
            lastValueFrom(this.assetCoursService.getSession(name)),
        ]);

        this.context.next({
            state: 'READY',
            user,
            asset,
            session
        });
    }

    private async onChangeRoute(name: string): Promise<void> {
        try {
            this.refresh(name);
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
    asset?: AssetCoursDetail;
    session?: AssetCoursSession;
}
