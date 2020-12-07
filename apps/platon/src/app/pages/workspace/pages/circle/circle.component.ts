import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CirclePageContext, CircleService } from './circle.service';
@Component({
    selector: 'app-ws-circle',
    templateUrl: './circle.component.html',
    styleUrls: ['./circle.component.scss'],
    providers: [CircleService],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CircleComponent implements OnInit, OnDestroy {
    private readonly subscriptions: Subscription[] = [];

    readonly tabs = [
        { title: 'Dashboard', icon: 'apps', link: ['dashboard'] },
        // { title: 'Forum', icon: 'chat', link: ['forum'] },
        { title: 'Documentation', icon: 'book', link: ['doc'] },
        { title: 'Paramètres', icon: 'settings', link: ['settings'] },
    ];

    context: CirclePageContext = {
        state: 'LOADING',
        members: []
    };

    isMember = false;
    isAdmin = false;

    constructor(
        private readonly circleService: CircleService,
        private readonly changeDetector: ChangeDetectorRef,
    ) {}

    ngOnInit() {
        this.subscriptions.push(
          this.circleService.context.subscribe(context => {
              this.context = context;
              const { user } = context;
              if (user) {
                  this.isAdmin = user.isAdmin;
                  this.isMember = !!context.members.find(e => e.id === user.id);
              }
              this.changeDetector.markForCheck();
          })
        );
    }

    ngOnDestroy() {
        this.subscriptions.forEach((s) => s.unsubscribe());
    }

}
