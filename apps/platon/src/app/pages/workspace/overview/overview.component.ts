import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@platon/core/auth';
import { Circle, CircleService, CircleTree, Resource } from '@platon/feature/workspace';
import { forkJoin, Subscription } from 'rxjs';

@Component({
    selector: 'app-workspace-overview',
    templateUrl: './overview.component.html',
    styleUrls: ['./overview.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OverviewComponent implements OnInit, OnDestroy {
    private readonly subscriptions: Subscription[] = [];

    personalCircle?: Circle;
    circleTree?: CircleTree;
    watchedCircles: Circle[] = [];
    resources: Resource[] = [];
    loading = true;

    constructor(
        private readonly router: Router,
        private readonly authService: AuthService,
        private readonly circleService: CircleService,
        private readonly changeDetectorRef: ChangeDetectorRef,
    ) { }

    async ngOnInit(): Promise<void> {
        const user = await this.authService.ready();
        if (!user) {
            this.changeDetectorRef.markForCheck();
            return;
        }

        this.subscriptions.push(
            forkJoin([
                this.circleService.tree(),
                this.circleService.findUserPersonal(),
                this.circleService.findWatchedBy(user.username)
            ]).subscribe(([tree, personal, watchedCircles]) => {
                this.circleTree = tree;
                this.personalCircle = personal;
                this.watchedCircles = watchedCircles.results;

                this.loading = false;
                this.changeDetectorRef.markForCheck();
            })
        );
    }

    ngOnDestroy(): void {
       this.subscriptions.forEach(s => s.unsubscribe());
    }

    onTapCircleTag(tag: string) {
        this.router.navigate(['/workspace/circles'], {
            queryParams: {
                q: tag
            },
            queryParamsHandling: 'merge',
        });
    }
}
