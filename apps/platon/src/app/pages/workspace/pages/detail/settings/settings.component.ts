import {
    ChangeDetectionStrategy,
    Component,
    OnDestroy,
    OnInit
} from '@angular/core';
import { Subscription } from 'rxjs';
import { DetailContext, DetailService } from '../detail.service';

@Component({
    selector: 'app-ws-detail-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsComponent implements OnInit, OnDestroy {
    private readonly subscriptions: Subscription[] = [];

    context: DetailContext = {
        state: 'LOADING',
        events: [],
        members: [],
    };

    constructor(
        private readonly detailService: DetailService
    ) {}

    ngOnInit() {
        this.subscriptions.push(
            this.detailService.context.subscribe((context) => {
                this.context = context;
            })
        );
    }

    ngOnDestroy() {
        this.subscriptions.forEach((s) => s.unsubscribe());
    }
}
