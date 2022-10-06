import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from "@angular/router";
import { Live, LiveService } from "@platon/feature/workspace";
import { lastValueFrom, Subscription } from "rxjs";
import { AssetExerciceComponent } from "../../shared/layout/exercice/exercice.component";

@Component({
    selector: 'app-live',
    templateUrl: './live.component.html',
    styleUrls: ['./live.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LiveComponent implements OnInit, OnDestroy {
    private readonly subscriptions: Subscription[] = [];

    live?: Live;

    @ViewChild(AssetExerciceComponent)
    exo!: AssetExerciceComponent;

    constructor(
        private readonly activatedRoute: ActivatedRoute,
        private readonly changeDetectorRef: ChangeDetectorRef,
        private readonly liveService: LiveService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.subscriptions.push(
            this.activatedRoute.data.subscribe(data => {
                this.live = data.live;
                this.changeDetectorRef.markForCheck();
            })
        );
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach(s => s.unsubscribe());
    }

    async submit() {
        const state = this.live as Required<Live>;
        if (this.exo.state.selection) {
            const cid = this.exo.state.cid;
            const form: Record<string, any> = {};
            form[cid] = this.exo.state;
            console.log(form);
            const request = await lastValueFrom(this.liveService.grade(state.id, state.env, form));
            this.router.navigateByUrl(`/live/${request.id}/answers/${request.env}`, { replaceUrl: true })
        }
    }

}
