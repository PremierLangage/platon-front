import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '@platon/core/auth';
import { ResourceFileService } from '@platon/feature/workspace';
import { AuthToken } from 'libs/core/auth/src/lib/models/auth-token';
import { Subscription } from 'rxjs';
import { LayoutTab } from '../../shared/layout';
import { ResourcePresenter } from './resource-presenter';


@Component({
    selector: 'app-resource',
    templateUrl: './resource.component.html',
    styleUrls: ['./resource.component.scss'],
    providers: [
        ResourcePresenter,
    ]
})
export class ResourceComponent implements OnInit, OnDestroy {
    private readonly subscriptions: Subscription[] = [];

    readonly tabs: LayoutTab[] = [
        {
            id: 'tab-overview',
            title: "Vue d'ensemble",
            link: ['overview']
        },
        {
            id: 'tab-informations',
            title: 'Informations',
            link: ['informations']
        },
    ];

    context = this.presenter.defaultContext;
    authToken!: AuthToken;

    get openInVsCodeUrl(): string {
        const rid = this.context.resource?.id;
        const { access, refresh } = this.authToken;
        const origin = location.origin;
        return `vscode://platon.platon-explorer?origin=${origin}&resource=${rid}&access=${access}&refresh=${refresh}`;
    }

    constructor(
        private readonly presenter: ResourcePresenter,
        private readonly authService: AuthService,
        private readonly changeDetectorRef: ChangeDetectorRef,
        private readonly resourceFileService: ResourceFileService,
    ) { }

    async ngOnInit(): Promise<void> {
        this.authToken = (await this.authService.token())!;
        this.subscriptions.push(
            this.presenter.contextChange.subscribe(context => {
                this.context = context;
                this.changeDetectorRef.markForCheck();
            })
        );

    }

    ngOnDestroy(): void {
        this.subscriptions.forEach(s => s.unsubscribe());
    }
}
