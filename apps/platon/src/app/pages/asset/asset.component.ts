<<<<<<< HEAD
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LayoutTab } from '../../shared/layout';
import { AssetPresenter } from './asset.presenter';
=======
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { AssetResolver, Link } from "./asset.resolver";
>>>>>>> develop-asset-update

@Component({
    selector: 'app-asset',
    templateUrl: './asset.component.html',
    styleUrls: ['./asset.component.scss'],
<<<<<<< HEAD
    providers: [AssetPresenter],
=======
    changeDetection: ChangeDetectionStrategy.OnPush,
>>>>>>> develop-asset-update
})
export class AssetComponent implements OnInit, OnDestroy {
    private readonly subscriptions: Subscription[] = [];

<<<<<<< HEAD
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
=======
    path: Link[] = this.assetResolver.defaultPath;

    constructor(
        private readonly assetResolver: AssetResolver,
        private readonly activatedRoute: ActivatedRoute,
        private readonly changeDetectorRef: ChangeDetectorRef,
    ) {
        this.subscriptions.push(
            this.assetResolver.pathChange.subscribe(path => {
                this.path = path;
>>>>>>> develop-asset-update
                this.changeDetectorRef.markForCheck();
            })
        );
    }

<<<<<<< HEAD
    ngOnDestroy(): void {
        this.subscriptions.forEach((s) => s.unsubscribe());
    }
=======
    ngOnInit(): void {

    }

    ngOnDestroy(): void {
        this.subscriptions.forEach(s => s.unsubscribe());
    }

>>>>>>> develop-asset-update
}
