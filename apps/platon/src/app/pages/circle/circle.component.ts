import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LayoutTab } from '../../shared/layout';
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

    readonly tabs: LayoutTab[] = [
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
    readonly actions: MenuAction[] = [];


    state = this.presenter.loadingState;

    constructor(
        private readonly presenter: CirclePresenter,
        private readonly changeDetectorRef: ChangeDetectorRef,
    ) { }

    ngOnInit(): void {
        this.subscriptions.push(
            this.presenter.stateChange.subscribe(context => {
                this.state = context;
                if (this.state.isMember) {
                    this.actions.push(
                        {
                            id: 'menu-create-exercise',
                            title: 'Créer un exercice',
                            icon: 'article',
                            link: ['/workspace', 'create-exercise']
                        },
                        {
                            id: 'menu-create-activity',
                            title: 'Créer une activité',
                            icon: 'assessment',
                            link: ['/workspace', 'create-activity']
                        }
                    );
                }
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


interface MenuAction {
    id: string;
    icon: string;
    title: string;
    link: string | any[];
}
