import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { AssetEvents } from "../asset-events.models";
import { AssetResolver } from "../asset.resolver";


@Component({
    selector: 'app-asset-section',
    templateUrl: './section.component.html',
    styleUrls: ['./section.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SectionComponent extends AssetEvents implements OnInit, OnDestroy {
    private readonly subscriptions: Subscription[] = [];

    private id!: number;
    section?: Section;

    constructor(
        private readonly activatedRoute: ActivatedRoute,
        private readonly assetResolver: AssetResolver,
    ) {
        super();
        this.subscriptions.push(
            this.activatedRoute.params.subscribe(params => {
                this.id = Number.parseInt(params.id + '', 10);
            })
        );
    }

    ngOnInit(): void {

    }

    ngOnDestroy(): void {
        this.subscriptions.forEach(s => s.unsubscribe());
    }

}

export interface Section {
    position: number;
    name: string;
    content: Record<string, any>;
}
