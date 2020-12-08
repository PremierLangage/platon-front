import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DetailContext, DetailService } from './detail.service';

@Component({
  selector: 'app-ws-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DetailService]
})
export class DetailComponent implements OnInit, OnDestroy {
    private readonly subscriptions: Subscription[] = [];

    tabs = [
        { title: 'Dashboard', icon: 'apps', link: ['dashboard'] },
        { title: 'Documentation', icon: 'book', link: ['doc'] },
        { title: 'Paramètres', icon: 'settings', link: ['settings'] },
    ];

    context: DetailContext = {
        state: 'LOADING',
        events: [],
        members: []
    };


    constructor(
        private readonly detailService: DetailService,
        private readonly changeDetector: ChangeDetectorRef
    ) { }


    ngOnInit() {
        this.subscriptions.push(
          this.detailService.context.subscribe(context => {
              this.context = context;
              this.changeDetector.markForCheck();
          })
        );
    }

    ngOnDestroy() {
        this.subscriptions.forEach((s) => s.unsubscribe());
    }

}
