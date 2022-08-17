import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { AssetPresenter } from "./asset-presenter";


@Component({
    selector: 'app-asset',
    templateUrl: './asset.component.html',
    styleUrls: ['./asset.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [ AssetPresenter ]
})
export class AssetComponent implements OnInit, OnDestroy {
    private readonly subscriptions: Subscription[] = [];

    context = this.presenter.defaultContext;

    constructor(
        private readonly presenter: AssetPresenter,
        private readonly changeDetectorRef: ChangeDetectorRef,
    ) {

    }

    ngOnInit(): void {

    }

    ngOnDestroy(): void {
        this.subscriptions.forEach(s => s.unsubscribe());
    }

}
