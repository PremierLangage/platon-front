import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { NzUploadFile } from "ng-zorro-antd/upload";
import { Subscription } from "rxjs";
import { CodeContext, CodeService } from "../code.service";


@Component({
    selector: 'app-resource-code-upload',
    templateUrl: './code-upload.component.html',
    styleUrls: ['./code-upload.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CodeUploadComponent implements OnInit, OnDestroy {
    private readonly subscriptions: Subscription[] = [];

    code: CodeContext = this.codeService.defaultCode;
    fileList: NzUploadFile[] = [];

    constructor(
        private readonly changeDetectorRef: ChangeDetectorRef,
        private readonly activatedRoute: ActivatedRoute,
        private readonly codeService: CodeService,
    ) { }

    ngOnInit(): void {
        this.subscriptions.push(
            this.codeService.codeChange.subscribe(code => {
                this.code = code;
                this.changeDetectorRef.markForCheck();
            }),
            this.activatedRoute.url.subscribe(urls => {
                this.codeService.onChangeRoute(urls);
            })
        );
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach(s => s.unsubscribe());
    }

}
