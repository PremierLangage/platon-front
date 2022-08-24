import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AuthService } from "@platon/core/auth";
import { Asset, CoursDetail, CoursService } from "@platon/feature/workspace";
import { lastValueFrom, Subscription } from "rxjs";
import { AssetEvents } from "../asset-events.models";


@Component({
    selector: 'app-asset-cours',
    templateUrl: './cours.component.html',
    styleUrls: ['./cours.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursComponent implements OnInit, OnDestroy {
    private readonly subscriptions: Subscription[] = [];
    private readonly routerSubscriptions: Subscription[] = [];

    asset!: Asset;
    overview : boolean = true;
    cours?: CoursDetail;

    constructor(
        private readonly activatedRoute: ActivatedRoute,
        private readonly changeDetectorRef: ChangeDetectorRef,
        private readonly authService: AuthService,
        private readonly coursService: CoursService
    ) {
        this.subscriptions.push(
            this.activatedRoute.data.subscribe(data => {
                this.asset = data.asset;
                this.changeDetectorRef.markForCheck();
            })
        );
    }

    async ngOnInit(): Promise<void> {
        const [user, cours] = await Promise.all([
            this.authService.ready(),
            lastValueFrom(this.coursService.getByName(this.asset.name))
        ]);
        this.cours = cours;
        this.changeDetectorRef.markForCheck();
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach(s => s.unsubscribe());
        this.routerSubscriptions.forEach(s => s.unsubscribe());
    }

    routerSubscribe(elementRef: AssetEvents): void {
        this.routerSubscriptions.push(
            elementRef.finish.subscribe(finish => {

            }),
            elementRef.next.subscribe(next => {

            }),
            elementRef.previous.subscribe(previous => {

            })
        );
        this.overview = false;
    }

    routerUnsubscribe(): void {
        this.routerSubscriptions.forEach(s => s.unsubscribe());
        this.overview = true;
    }
}

