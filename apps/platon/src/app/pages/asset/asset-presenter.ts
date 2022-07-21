import { Injectable, OnDestroy } from "@angular/core";
import { ActivatedRoute, UrlSegment } from "@angular/router";
import { AuthService, AuthUser } from "@platon/core/auth";
import { AssetService } from "@platon/feature/workspace";
import { Asset, AssetTypes } from "libs/feature/workspace/src/lib/models/asset";
import { BehaviorSubject, firstValueFrom, lastValueFrom, Observable, Subscription } from "rxjs";


@Injectable()
export class AssetPresenter implements OnDestroy {
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
        private readonly activatedRoute: ActivatedRoute
    ) {
        this.subscriptions.push(
            this.activatedRoute.url.subscribe((urls) => {
                this.onChangeRoute(urls);
            })
        );
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach(s => s.unsubscribe());
    }

    private async getAsset(urls: UrlSegment[]): Promise<void> {
        const user = await this.authService.ready();
        const asset = await firstValueFrom(this.assetService.getAssetByPath(urls.map(url => url.path).join('/')));
        this.context.next({
            state: 'READY',
            user,
            urls,
            asset
        });
    }

    private async getRunnableAsset(urls: UrlSegment[]): Promise<void> {
        const user = await this.authService.ready();
        const asset = await firstValueFrom(this.assetService.getRunnableAssetByPath(urls.map(url => url.path).join('/')));
        this.context.next({
            state: 'READY',
            user,
            urls,
            asset
        })
    }

    private async onChangeRoute(urls: UrlSegment[]): Promise<void> {
        try {
            await this.getAsset(urls);
            if (this.context.value.asset?.type === 'EXERCISE') {
                await this.getRunnableAsset(urls);
            }
        } catch {
            // TODO
            this.context.next({ state: 'SERVER_ERROR' });
        }
    }
}

export interface Context {
    state: 'LOADING' | 'READY' | 'SERVER_ERROR' | 'NOT_FOUND' | 'UNAUTHORIZED';
    user?: AuthUser;
    urls?: UrlSegment[];
    asset?: Asset;
}
