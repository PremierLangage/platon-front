import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Asset } from "@platon/feature/workspace";
import { Subscription } from "rxjs";
import { AssetEvents } from "../asset-events.models";
import { AssetResolver } from "../asset.resolver";

@Component({
    selector: 'app-asset-exersice',
    templateUrl: './exersice.component.html',
    styleUrls: ['./exersice.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExersiceComponent extends AssetEvents implements OnInit, OnDestroy {
    private readonly subscriptions: Subscription[] = [];

    asset!: Asset;

    clickEvent = new EventEmitter<string>();

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
        this.assetResolver.popToPath();
    }

    onClick(): void {
        this.finish.emit('Exersice finish')
    }

}
