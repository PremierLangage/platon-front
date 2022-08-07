import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from "@angular/core";
import { CardDisplay, CardItem } from "@platon/shared/ui/card";
import { Subscription } from "rxjs";
import { AdminCoursPresenster } from "./admin-cours-presenter";


@Component({
    selector: 'app-admin-cours',
    templateUrl: './admin-cours.component.html',
    styleUrls: [
        './admin-cours.component.scss',
        '../admin.component.scss'
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [AdminCoursPresenster]
})
export class AdminCoursComponent implements OnInit, OnDestroy {
    private readonly subscriptions: Subscription[] = [];

    context = this.presenter.defaultContext;

    display: CardDisplay = 'row';

    constructor(
        private readonly presenter: AdminCoursPresenster,
        private readonly changeDetectorRef: ChangeDetectorRef,
    ) { }

    ngOnInit(): void {
        this.subscriptions.push(
            this.presenter.contextChange.subscribe(context => {
                this.context = context;
                this.changeDetectorRef.markForCheck();
            })
        );
        this.presenter.refresh();
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach(s => s.unsubscribe());
    }

    getItems(): CardItem[] | undefined {
        return this.context.cours?.map<CardItem>((cours,index) => {
            return {
                title: cours.name,
                description: cours.path,
                path: ['detail', cours.path]
            };
        });
    }

}
