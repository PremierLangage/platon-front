import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { fadeInAnimation } from 'angular-animations';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss'],
  animations: [fadeInAnimation()]
})
export class WorkspaceComponent implements OnInit, OnDestroy {
    subscription?: Subscription;

    animate = false;

    constructor(
        private readonly router: Router,
        private readonly changeDetector: ChangeDetectorRef,
    ) {}

    ngOnInit() {
        this.subscription = this.router.events.pipe(
            filter(e => e instanceof NavigationStart)
        ).subscribe(() => {
            this.animate = true;
            this.changeDetector.detectChanges()
            setTimeout(() => {
                this.animate = false;
            }, 1000)
        });
    }

    ngOnDestroy() {
        this.subscription?.unsubscribe();
    }
}
