import { Injectable, OnDestroy } from "@angular/core";
import { UrlSegment } from "@angular/router";
import { AuthService, AuthUser } from "@platon/core/auth";
import { BehaviorSubject, Observable, Subscription } from "rxjs";


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

    ) { }

    ngOnDestroy(): void {
        this.subscriptions.forEach(s => s.unsubscribe());
    }


}

export interface Context {
    state: 'LOADING' | 'READY' | 'SERVER_ERROR' | 'NOT_FOUND' | 'UNAUTHORIZED';
    user?: AuthUser;
    urls?: UrlSegment[];
}
