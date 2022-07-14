import { ChangeDetectorRef, Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { AssetPresenter } from "./asset-presenter";


@Component({
    selector: 'app-asset',
    templateUrl: './asset.component.html',
    styleUrls: ['./asset.component.scss'],
    providers: [AssetPresenter]
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

    getSubPath(i: number): string[] {
        return ['/asset'].concat(this.context.urls?.slice(0, i+1).map(url => url.path) || []);
    }

    postExericeState(state: any) {
        console.log(state);
    }

}
