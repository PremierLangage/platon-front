import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ResourceFileService } from '@platon/feature/workspace';
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

    constructor(
        private readonly presenter: ResourcePresenter,
        private readonly changeDetectorRef: ChangeDetectorRef,
        private readonly resourceFileService: ResourceFileService,
    ) { }

    ngOnInit(): void {
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
