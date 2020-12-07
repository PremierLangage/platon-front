import {
    ChangeDetectionStrategy,
    Component,
    OnDestroy,
    OnInit
} from '@angular/core';
import { Subscription } from 'rxjs';
import { CirclePageContext, CircleService } from '../circle.service';

@Component({
    selector: 'app-circle-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsComponent implements OnInit, OnDestroy {
    private readonly subscriptions: Subscription[] = [];

    context: CirclePageContext = {
        state: 'LOADING',
        members: [],
    };

    constructor(
        private readonly circleService: CircleService
    ) {}

    ngOnInit() {
        this.subscriptions.push(
            this.circleService.context.subscribe((context) => {
                this.context = context;
            })
        );
    }

    ngOnDestroy() {
        this.subscriptions.forEach((s) => s.unsubscribe());
    }
}
