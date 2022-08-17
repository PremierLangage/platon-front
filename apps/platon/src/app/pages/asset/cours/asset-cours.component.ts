import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { AssetCoursPresenter, Context } from "./asset-cours-presenter";


@Component({
    selector: 'app-asset-cours',
    templateUrl: './asset-cours.component.html',
    styleUrls: ['./asset-cours.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [ AssetCoursPresenter ]
})
export class AssetCoursComponent implements OnInit, OnDestroy {
    private readonly subscriptions: Subscription[] = [];

    context: Context = this.presenter.defaultContext;

    constructor (
        private readonly presenter: AssetCoursPresenter,
        private readonly changeDetectorRef: ChangeDetectorRef,
    ) {

    }

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
