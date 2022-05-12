import { Component, OnInit } from '@angular/core';
import { MarkdownState } from 'libs/feature/web-component/src/lib/widgets/markdown/markdown';
import { AssetPresenter } from '../asset.presenter';

@Component({
    selector: 'app-overview',
    templateUrl: './overview.component.html',
    styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit {
    context = this.presenter.defaultContext;

    constructor(private readonly presenter: AssetPresenter) {}

    ngOnInit(): void {}
}
