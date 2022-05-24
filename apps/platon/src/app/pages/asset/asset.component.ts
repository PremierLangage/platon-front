import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LayoutTab } from '../../shared/layout';
import { AssetPresenter } from './asset.presenter';

@Component({
    selector: 'app-asset',
    templateUrl: './asset.component.html',
    styleUrls: ['./asset.component.scss'],
    providers: [AssetPresenter],
})
export class AssetComponent implements OnInit, OnDestroy {
    private readonly subscriptions: Subscription[] = [];

    readonly tabs: LayoutTab[] = [
        {
            id: 'tab-runner',
            title: 'Runner',
            link: ['runner'],
        },
    ];

    context = this.presenter.defaultContext;

    constructor(
        private readonly presenter: AssetPresenter,
        private readonly changeDetectorRef: ChangeDetectorRef
    ) {}

    ngOnInit(): void {
        this.subscriptions.push(
            this.presenter.contextChange.subscribe(async (context) => {
                this.context = context;
                this.changeDetectorRef.markForCheck();
            })
        );
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach((s) => s.unsubscribe());
    }
}
