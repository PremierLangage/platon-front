import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { AssetResolver, Link } from "./asset.resolver";

@Component({
    selector: 'app-asset',
    templateUrl: './asset.component.html',
    styleUrls: ['./asset.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AssetComponent implements OnInit, OnDestroy {
    private readonly subscriptions: Subscription[] = [];

    path: Link[] = this.assetResolver.defaultPath;

    constructor(
        private readonly assetResolver: AssetResolver,
        private readonly activatedRoute: ActivatedRoute,
        private readonly changeDetectorRef: ChangeDetectorRef,
    ) {
        this.subscriptions.push(
            this.assetResolver.pathChange.subscribe(path => {
                this.path = path;
                this.changeDetectorRef.markForCheck();
            })
        );
    }

    ngOnInit(): void {

    }

    ngOnDestroy(): void {
        this.subscriptions.forEach(s => s.unsubscribe());
    }

}
