import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { AdminCoursDetailPresenter } from "../admin-cours-detail-presenter";


@Component({
    selector: 'app-admin-cours-detail-settings',
    templateUrl: './admin-cours-detail-settings.component.html',
    styleUrls: ['./admin-cours-detail-settings.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminCoursDetailSettingsComponent implements OnInit, OnDestroy {
    private readonly subscriptions: Subscription[] = [];

    context = this.presenter.defaultContext;

    description!: string;

    constructor(
        private readonly presenter: AdminCoursDetailPresenter,
        private readonly changeDetectorRef: ChangeDetectorRef,
    ) { }

    ngOnInit(): void {
        this.subscriptions.push(
            this.presenter.contextChange.subscribe(context => {
                this.context = context;
                this.description = context.asset?.description || '';
                this.changeDetectorRef.markForCheck();
            })
        );
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach(s => s.unsubscribe());
    }

    didChangeDescription(event: any): void {
        this.presenter.setDescription(event.target.value);
    }


}
