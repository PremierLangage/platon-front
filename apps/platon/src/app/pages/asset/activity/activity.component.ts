import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Asset } from "@platon/feature/workspace";
import { Subscription } from "rxjs";
import { AssetEvents } from "../asset-events.models";
import { AssetResolver } from "../asset.resolver";

@Component({
    selector: 'app-asset-activity',
    templateUrl: './activity.component.html',
    styleUrls: ['./activity.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActivityComponent extends AssetEvents implements OnInit, OnDestroy {
    private readonly subscriptionsOutlet: Subscription[] = [];
    private readonly subscriptions: Subscription[] = [];

    asset!: Asset;

    constructor(
        private readonly activatedRoute: ActivatedRoute,
        private readonly changeDetectorRef: ChangeDetectorRef,
        private readonly assetResolver: AssetResolver
    ) {
        super();
        this.subscriptions.push(
            this.activatedRoute.data.subscribe(data => {
                this.asset = data.asset;
                this.changeDetectorRef.markForCheck();
            })
        );
    }

    ngOnInit(): void {

    }

    ngOnDestroy(): void {
        this.subscriptions.forEach(s => s.unsubscribe());
        this.subscriptionsOutlet.forEach(s => s.unsubscribe());
        this.assetResolver.popToPath();
    }

    subscriber(elementRef: AssetEvents): void {
        this.subscriptionsOutlet.push(
            elementRef.finish.subscribe(finish => {
                console.log(finish);
            })
        )
    }

    unsubscriber(): void {
        this.subscriptionsOutlet.forEach(s => s.unsubscribe);
    }


}
