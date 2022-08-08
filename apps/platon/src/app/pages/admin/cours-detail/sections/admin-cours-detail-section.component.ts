import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { AdminCoursDetailPresenter } from "../admin-cours-detail-presenter";


@Component({
    selector: 'app-admin-cours-detail-settings',
    templateUrl: './admin-cours-detail-section.component.html',
    styleUrls: ['./admin-cours-detail-section.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminCoursDetailSectionComponent implements OnInit, OnDestroy {
    private readonly subscriptions: Subscription[] = [];
    private id!: number;

    context = this.presenter.defaultContext;

    section !: CoursSection;

    constructor(
        private readonly presenter: AdminCoursDetailPresenter,
        private readonly activatedRoute: ActivatedRoute,
        private readonly changeDetectorRef: ChangeDetectorRef,
        private router: Router,
    ) { }

    ngOnInit(): void {
        this.subscriptions.push(
            this.activatedRoute.params.subscribe(params => {
                this.id = Number.parseInt(params.id + '', 10);
                this.section = this.presenter.getSection(this.id);
                this.changeDetectorRef.markForCheck();
            }),
            this.presenter.contextChange.subscribe(context => {
                this.context = context;
                this.section = this.presenter.getSection(this.id);
                this.changeDetectorRef.markForCheck();
            })
        );
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach(s => s.unsubscribe());
    }

}

export interface CoursSection {
    position: number;
    name: string;
    content: string;
}
