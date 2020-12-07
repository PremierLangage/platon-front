import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CirclePageContext, CircleService } from './circle.service';
@Component({
    selector: 'app-ws-circle',
    templateUrl: './circle.component.html',
    styleUrls: ['./circle.component.scss'],
    providers: [CircleService]
})
export class CircleComponent implements OnInit, OnDestroy {
    private readonly subscriptions: Subscription[] = [];

    readonly tabs = [
        { title: 'Dashboard', icon: 'apps', link: ['dashboard'] },
        { title: 'Forum', icon: 'chat', link: ['forum'] },
        { title: 'Documentation', icon: 'book', link: ['doc'] },
        { title: 'Paramètres', icon: 'settings', link: ['settings'] },
    ];

    context: CirclePageContext = {
        state: 'LOADING'
    };

    constructor(
        private readonly circleService: CircleService,
    ) {}

    ngOnInit() {
        this.subscriptions.push(
          this.circleService.context.subscribe(context => this.context = context)
        );
    }

    ngOnDestroy() {
        this.subscriptions.forEach((s) => s.unsubscribe());
    }

}
