<<<<<<< HEAD
import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit, ElementRef, AfterContentInit, ViewChild } from '@angular/core';
import { IWebComponent, WebComponentDefinition, WebComponentService } from '@platon/feature/web-component';
import { RadioGroupComponent } from 'libs/feature/web-component/src/lib/forms/radio-group/radio-group.component';
import { WebComponentChangeDetectorService } from 'libs/feature/web-component/src/lib/web-component-change-detector.service';
import { Subscription } from 'rxjs';
import { LivePresenter } from './live-presenter';
=======
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Live } from "@platon/feature/workspace";
import { Subscription } from "rxjs";
>>>>>>> develop-asset-update

@Component({
    selector: 'app-live',
    templateUrl: './live.component.html',
    styleUrls: ['./live.component.scss'],
<<<<<<< HEAD
    providers: [LivePresenter],
=======
>>>>>>> develop-asset-update
})
export class LiveComponent implements OnInit, OnDestroy {
    private readonly subscriptions: Subscription[] = [];

<<<<<<< HEAD
    context = this.presenter.defaultContext;

    init: any = {
        form: "{{radio|component}}",
        process: {
            cid: "0bb2efc2-0569-4679-8fb6-c71985338534",
            horizontal: false,
            selector: "wc-radio-group",
            state: {
                items: [
                    {
                        content: "La reponse est Vrai"
                    },
                    {
                        content: "La reponse est Fausse"
                    }
                ]
            }
        }
    }

    component: any = {};

    constructor(
        private readonly presenter: LivePresenter,
        private readonly changeDetectorRef: ChangeDetectorRef,
    ) {}

    ngOnInit(): void {
        this.subscriptions.push(
            this.presenter.contextChange.subscribe(async (context) => {
                this.context = context;
=======
    live?: Live;

    constructor(
        private readonly activatedRoute: ActivatedRoute,
        private readonly changeDetectorRef: ChangeDetectorRef,
    ) { }

    ngOnInit(): void {
        this.subscriptions.push(
            this.activatedRoute.data.subscribe(data => {
                this.live = data.live;
>>>>>>> develop-asset-update
                this.changeDetectorRef.markForCheck();
            })
        );
    }

    ngOnDestroy(): void {
<<<<<<< HEAD
        this.subscriptions.forEach((s) => s.unsubscribe());
    }

    grader(): void {
        console.log(this.component);
    }


}

=======
        this.subscriptions.forEach(s => s.unsubscribe());
    }

    getState(state: any) {
        console.log(state);
    }

}
>>>>>>> develop-asset-update
