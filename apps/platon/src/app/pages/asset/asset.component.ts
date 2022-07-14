import { ChangeDetectorRef, Component, ComponentRef, OnDestroy, OnInit, ViewChild, ViewContainerRef } from "@angular/core";
import { AssetCoursViewerComponent } from "libs/feature/web-component/src/lib/widgets/asset-cours-viewer/asset-cours-viewer.component";
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

    // private getAssetWidget(context: any) {
    //     if (context.state === 'READY' && context.asset) {
    //         this.assetWidget.detach();
    //         const widget = this.assetWidget.createComponent(AssetCoursViewerComponent);
    //         this.assetWidget.insert(widget.hostView);
    //         widget.instance.state = context.asset;
    //     }
    // }

}
