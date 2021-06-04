import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '@platon/core/auth';
import { Circle, CircleService, CircleTree, Resource } from '@platon/feature/workspace';
import { forkJoin, Subscription } from 'rxjs';

@Component({
    selector: 'app-circle-overview',
    templateUrl: './overview.component.html',
    styleUrls: ['./overview.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OverviewComponent implements OnInit, OnDestroy {
    ngOnInit() {}

    ngOnDestroy(): void {}
}
