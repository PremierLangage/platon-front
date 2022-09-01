import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { AdminCoursDetailPresenter } from "./admin-cours-detail-presenter";

@Component({
    selector: 'app-admin-cours-detail',
    templateUrl: './admin-cours-detail.component.html',
    styleUrls: [
        './admin-cours-detail.component.scss',
        '../admin.component.scss'
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [AdminCoursDetailPresenter]
})
export class AdminCoursDetailComponent implements OnInit, OnDestroy {
    private readonly subscriptions: Subscription[] = [];

    context = this.presenter.defaultContext;
    saving: boolean = false;

    constructor(
        private readonly presenter: AdminCoursDetailPresenter,
        private readonly changeDetectorRef: ChangeDetectorRef,
    ) { }

    ngOnInit(): void {
        this.subscriptions.push(
            this.presenter.contextChange.subscribe(context => {
                this.context = context;
                this.changeDetectorRef.markForCheck();
            }),
        );
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach(s => s.unsubscribe());
    }

    didAddSection(): void {
        this.presenter.addSection();
    }

    async didSave(): Promise<void> {
        this.saving = true;
        await this.presenter.save();
        this.saving = false;
    }

}
