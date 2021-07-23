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

    readonly actions: MenuAction[] = [];
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
            id: 'tab-members',
            title: 'Membres',
            link: ['members']
        },
        {
            id: 'tab-informations',
            title: 'Informations',
            link: ['informations']
        },
    ];

    context = this.presenter.defaultContext;

    constructor(
        private readonly presenter: CirclePresenter,
        private readonly changeDetectorRef: ChangeDetectorRef,
    ) { }

    ngOnInit(): void {
        this.subscriptions.push(
            this.presenter.contextChange.subscribe(context => {
                this.context = context;
                if (this.context.isMember) {
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
        if (this.context.watcher) {
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
