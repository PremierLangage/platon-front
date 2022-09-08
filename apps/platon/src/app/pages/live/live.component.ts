import { ChangeDetectorRef, Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Live } from "@platon/feature/workspace";
import { Subscription } from "rxjs";

@Component({
    selector: 'app-live',
    templateUrl: './live.component.html',
    styleUrls: ['./live.component.scss'],
})
export class LiveComponent implements OnInit, OnDestroy {
    private readonly subscriptions: Subscription[] = [];
    live?: Live;

    constructor(
        private readonly activatedRoute: ActivatedRoute,
        private readonly changeDetectorRef: ChangeDetectorRef,
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

    getState(state: any) {
        console.log(state);
    }

}
