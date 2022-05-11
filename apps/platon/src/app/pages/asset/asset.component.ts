import {
    ChangeDetectionStrategy,
    Component,
    OnDestroy,
    OnInit,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { LayoutTab } from '../../shared/layout';
import { AssetPresenter } from './asset.presenter';

@Component({
    selector: 'app-asset',
    templateUrl: './asset.component.html',
    styleUrls: ['./asset.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [AssetPresenter],
})
export class AssetComponent implements OnInit, OnDestroy {
    private readonly subscriptions: Subscription[] = [];

    readonly tabs: LayoutTab[] = [];

    context = this.presenter.defaultContext;

    constructor(private readonly presenter: AssetPresenter) {}

    ngOnInit(): void {}

    ngOnDestroy(): void {
        this.subscriptions.forEach((s) => s.unsubscribe());
    }
}
