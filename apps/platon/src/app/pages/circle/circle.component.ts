import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CirclePresenter } from './circle.presenter';
@Component({
    selector: 'app-circle',
    templateUrl: './circle.component.html',
    styleUrls: ['./circle.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [CirclePresenter],
})
export class CircleComponent implements OnInit, OnDestroy {
    private readonly subscriptions: Subscription[] = [];

    readonly tabs: Tab[] = [
        {
            id: 'tab-overview',
            title: "Vue d'ensemble",
            link: ['overview']
        },

        {
            id: 'tab-resources',
            title: 'Ressources',
            link: ['resources']
        },
        {
            id: 'tab-settings',
            title: 'Paramètres',
            link: ['settings']
        },
    ];

    state = this.presenter.loadingState;

    constructor(
        private readonly presenter: CirclePresenter,
        private readonly changeDetectorRef: ChangeDetectorRef,
    ) { }

    ngOnInit(): void {
        this.subscriptions.push(
            this.presenter.stateChange.subscribe(context => {
                this.state = context;
                this.changeDetectorRef.markForCheck();
            })
        );
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach(s => s.unsubscribe());
    }

    async acceptInvitation(): Promise<void> {
        await this.presenter.acceptInvitation();
    }

    async declineInvitation(): Promise<void> {
        await this.presenter.declineInvitation();
    }

    async changeWatchingState(): Promise<void> {
        if (this.state.watcher) {
            await this.presenter.unwatch();
        } else {
            await this.presenter.watch();
        }
    }
}

interface Tab {
    id: string;
    title: string;
    link: string | any[];
}
