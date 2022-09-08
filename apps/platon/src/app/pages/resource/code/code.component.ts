import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { ResourcePresenter } from "../resource-presenter";
import { CodeService } from "./code.service";

@Component({
    selector: 'app-resource-code',
    templateUrl: './code.component.html',
    styleUrls: ['./code.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [CodeService]
})
export class CodeComponent implements OnInit, OnDestroy {
    private readonly subscriptions: Subscription[] = [];

    code = this.codeService.defaultCode;
    context = this.presenter.defaultContext;

    constructor(
        private readonly presenter: ResourcePresenter,
        private readonly changeDetectorRef: ChangeDetectorRef,
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
