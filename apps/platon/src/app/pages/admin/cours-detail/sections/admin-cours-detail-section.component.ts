import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { AdminCoursDetailSectionService, Section } from "./admin-cours-detail-section.service";


@Component({
    selector: 'app-admin-cours-detail-settings',
    templateUrl: './admin-cours-detail-section.component.html',
    styleUrls: ['./admin-cours-detail-section.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminCoursDetailSectionComponent implements OnDestroy {
    private readonly subscriptions: Subscription[] = [];

    private id!: number;

    section!: Section;

    constructor(
        private readonly activatedRoute: ActivatedRoute,
        private readonly sectionService: AdminCoursDetailSectionService,
        private readonly changeDetectorRef: ChangeDetectorRef,
        private router: Router,
    ) {
        this.subscriptions.push(
            this.activatedRoute.params.subscribe(params => {
                this.id = Number.parseInt(params.id + '', 10);
                const section = this.sectionService.getSection(this.id);
                if (section === undefined) {
                    this.router.navigate(['../../settings'], { relativeTo: this.activatedRoute });
                }
                this.section = section;
                this.changeDetectorRef.markForCheck();
            })
        );
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach(s => s.unsubscribe());
    }

}
