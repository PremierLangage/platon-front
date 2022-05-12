import { Injectable, OnDestroy } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { readme } from './overview/overview.beta';

@Injectable()
export class AssetPresenter implements OnDestroy {
    private readonly subscriptions: Subscription[] = [];
    private readonly context = new BehaviorSubject<Context>(
        this.defaultContext
    );

    get defaultContext(): Context {
        return {
            state: 'LOADING',
            description: 'Simple description de notre cours',
            readme: readme,
        };
    }

    get contextChange(): Observable<Context> {
        return this.context.asObservable();
    }

    constructor(private readonly messageService: NzMessageService) {}

    ngOnDestroy(): void {
        this.subscriptions.forEach((s) => s.unsubscribe());
    }
}

export interface Context {
    state: 'LOADING' | 'READY' | 'SERVER_ERROR' | 'NOT_FOUND' | 'UNAUTHORIZED';
    description?: string;
    readme?: string;
}
