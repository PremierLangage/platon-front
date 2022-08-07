import { Injectable, OnDestroy } from "@angular/core";
import { AssetService } from "@platon/feature/workspace";
import { BehaviorSubject, Observable, Subscription } from "rxjs";

@Injectable()
export class AdminPresenter implements OnDestroy {

    private readonly subscriptions: Subscription[] = [];
    private readonly context = new BehaviorSubject<Context>(this.defaultContext);

    get defaultContext(): Context {
        return { state: 'LOADING' };
    }

    get contextChange(): Observable<Context> {
        return this.context.asObservable();
    }

    constructor(
        private assetService: AssetService,
    ) { }

    ngOnDestroy(): void {
        this.subscriptions.forEach(s => s.unsubscribe());
    }

}

export interface Context {
    state: 'LOADING' | 'READY' | 'SERVER_ERROR' | 'NOT_FOUND' | 'UNAUTHORIZED';
    //user?: AuthUser;
}
