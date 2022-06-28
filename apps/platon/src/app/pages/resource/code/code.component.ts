import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    OnDestroy,
    OnInit,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FileEntry, FileTree, Resource } from '@platon/feature/workspace';
import { lastValueFrom, Subscription } from 'rxjs';
import { ResourcePresenter } from '../resource-presenter';

@Component({
    selector: 'app-resource-code',
    templateUrl: './code.component.html',
    styleUrls: ['./code.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodeComponent implements OnInit, OnDestroy {

    private readonly subscriptions: Subscription[] = [];

    context = this.presenter.defaultContext;
    tree?: FileTree;
    route?: Route[];

    constructor(
        private readonly presenter: ResourcePresenter,
        private readonly changeDetectorRef: ChangeDetectorRef,
        private readonly activatedRoute: ActivatedRoute,
    ) {
    }

    ngOnInit(): void {
        this.subscriptions.push(
            this.activatedRoute.url.subscribe((url) => {
                this.route = url;
                console.log(this.route);
            }),
            this.presenter.contextChange.subscribe(async (context) => {
                this.context = context;
                this.tree = await this.presenter.fileTree().toPromise();
                this.changeDetectorRef.markForCheck();
            })
        )
    }

    ngOnDestroy(): void {

    }

}

interface Route {
    path: string;
}
