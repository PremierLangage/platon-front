import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { AdminCoursDetailPresenter } from "./admin-cours-detail-presenter";
import { AdminCoursDetailSectionService } from "./sections/admin-cours-detail-section.service";


@Component({
    selector: 'app-admin-cours-detail',
    templateUrl: './admin-cours-detail.component.html',
    styleUrls: [
        './admin-cours-detail.component.scss',
        '../admin.component.scss'
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        AdminCoursDetailPresenter,
        AdminCoursDetailSectionService
    ]
})
export class AdminCoursDetailComponent implements OnInit {
    private readonly subscriptions: Subscription[] = [];

    context = this.presenter.defaultContext;
    sections = this.sectionsService.defaultSections;

    constructor(
        private readonly presenter: AdminCoursDetailPresenter,
        private readonly sectionsService: AdminCoursDetailSectionService,
        private readonly changeDetectorRef: ChangeDetectorRef,
    ) { }

    ngOnInit(): void {
        this.subscriptions.push(
            this.presenter.contextChange.subscribe(context => {
                this.context = context;
                this.sectionsService.setSections(context.cours?.content?.get('sections'));
                this.changeDetectorRef.markForCheck();
            }),
            this.sectionsService.sectionsChange.subscribe(sections => {
                this.sections = sections;
                this.changeDetectorRef.markForCheck();
            })
        );
    }

    didPushSection(): void {
        this.sectionsService.pushSection();
    }

}
