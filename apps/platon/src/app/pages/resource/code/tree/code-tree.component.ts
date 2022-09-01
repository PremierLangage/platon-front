import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, OnDestroy, OnInit, Output } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { CodeContext, CodeService } from "../code.service";


@Component({
    selector: 'app-resource-code-tree',
    templateUrl: './code-tree.component.html',
    styleUrls: ['./code-tree.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodeTreeComponent implements OnInit, OnDestroy{
    private readonly subscriptions: Subscription[] = [];

    code: CodeContext = this.codeService.defaultCode;

    constructor(
        private readonly changeDetectorRef: ChangeDetectorRef,
        private readonly activatedRoute: ActivatedRoute,
        private readonly codeService: CodeService,
        private router: Router,
    ) {

    }
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

    didGoBack(): void {
        this.router.navigate(['..'], { relativeTo: this.activatedRoute });
    }

    didGoPath(path: string): void {
        this.router.navigate([path], { relativeTo: this.activatedRoute });
    }

    didGoEdit(path?: string): void {
        let route = ['edit'];
        path?.split('/').forEach(p => route.push(p));
        this.router.navigate(route, {relativeTo: this.activatedRoute.parent?.parent });
    }

    didGoNewFile(path?: string): void {
        let route = ['new'];
        if (path) {
            path.split('/').forEach(p => route.push(p));
        }
        this.router.navigate(route, { relativeTo: this.activatedRoute.parent?.parent });
    }

    didGoUploadFile(path?: string): void {
        let route = ['upload'];
        if (path) {
            path.split('/').forEach(p => route.push(p));
        }
        this.router.navigate(route, { relativeTo: this.activatedRoute.parent?.parent });
    }
}

