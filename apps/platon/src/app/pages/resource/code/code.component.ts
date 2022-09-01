<<<<<<< HEAD
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
=======
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Router, UrlSegment } from "@angular/router";
import { FileEntry, FileTree } from "@platon/feature/workspace";
import { firstValueFrom, Subscription } from "rxjs";
import { ResourcePresenter } from "../resource-presenter";
import { CodeService } from "./code.service";

>>>>>>> develop-asset-update

@Component({
    selector: 'app-resource-code',
    templateUrl: './code.component.html',
    styleUrls: ['./code.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
<<<<<<< HEAD
})
export class CodeComponent implements OnInit, OnDestroy {

    private readonly subscriptions: Subscription[] = [];

    context = this.presenter.defaultContext;
    tree?: FileTree;
    route?: Route[];
=======
    providers: [CodeService]
})
export class CodeComponent implements OnInit, OnDestroy {
    private readonly subscriptions: Subscription[] = [];

    code = this.codeService.defaultCode;
    context = this.presenter.defaultContext;
>>>>>>> develop-asset-update

    constructor(
        private readonly presenter: ResourcePresenter,
        private readonly changeDetectorRef: ChangeDetectorRef,
<<<<<<< HEAD
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
=======
        private readonly codeService: CodeService
    ) { }

    ngOnInit(): void {
        this.subscriptions.push(
            this.presenter.contextChange.subscribe(async context => {
                this.context = context;
                await this.codeService.onContextChange();
                this.changeDetectorRef.markForCheck();
            }),
            this.codeService.codeChange.subscribe(code => {
                this.code = code;
                this.changeDetectorRef.markForCheck();
            })
        );
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach(s => s.unsubscribe());
    }

}
>>>>>>> develop-asset-update
