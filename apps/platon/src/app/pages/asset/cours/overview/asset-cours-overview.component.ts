import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from "@angular/core";
import { AuthUser } from "@platon/core/auth";
import { Subscription } from "rxjs";
import { AssetCoursPresenter } from "../asset-cours-presenter";
import { CoursContent } from "../asset-cours.model";


@Component({
    selector: 'app-asset-cours-overview',
    templateUrl: './asset-cours-overview.component.html',
    styleUrls: ['./asset-cours-overview.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AssetCoursOverviewComponent implements OnInit, OnDestroy {
    private readonly subscriptions: Subscription[] = [];

    content?: CoursContent;
    author?: AuthUser;

    constructor(
        private readonly presenter: AssetCoursPresenter,
        private readonly changeDetectorRef: ChangeDetectorRef,
    ) { }

    ngOnInit(): void {
        this.subscriptions.push(
            this.presenter.contextChange.subscribe(context => {
                this.content = context.asset?.content;
                this.author = context.asset?.author;
                this.changeDetectorRef.markForCheck();
            })
        );
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach(s => s.unsubscribe());
    }
}

