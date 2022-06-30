import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RunnerService } from '@platon/feature/workspace';
import { Subscription } from 'rxjs';
import { AssetPresenter } from '../asset.presenter';

@Component({
    selector: 'app-runner',
    templateUrl: './runner.component.html',
    styleUrls: ['./runner.component.scss'],
})
export class RunnerComponent implements OnInit {
    private readonly subscriptions: Subscription[] = [];

    pl!: object;
    loading = true;

    constructor(
        private readonly runnerService: RunnerService,
        private readonly activeRoute: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.activeRoute.params.subscribe((params) => {
            this.runnerService.render(1).subscribe((response) => {
                this.pl = response;
                this.loading = false;
            });
        });
    }
}
