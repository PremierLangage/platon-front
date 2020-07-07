import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { DocsService } from '../docs.service';

@Component({
  selector: 'docs-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit, OnDestroy {
    private subscriptions: Subscription[] = [];

    document? = '';

    constructor(
        private readonly docs: DocsService,
        private readonly router: Router,
        private readonly activeRoute: ActivatedRoute,
    ) { }

    ngOnInit() {
        this.onChangeRoute();
        this.subscriptions.push(this.router.events.pipe(
            filter(e => e instanceof NavigationEnd)
        ).subscribe(this.onChangeRoute.bind(this)));
    }

    ngOnDestroy() {
        this.subscriptions.forEach(s => s.unsubscribe());
    }

    private async onChangeRoute() {
        this.document = await this.docs.loadDocument(this.activeRoute);
    }

}
